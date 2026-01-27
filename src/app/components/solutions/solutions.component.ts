import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsService, Solution } from '../../services/solutions.service';

interface SolutionCategory {
  title: string;
  solutions: Solution[];
  currentIndex: number;
}

@Component({
  selector: 'app-solutions',
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css',
})
export class SolutionsComponent implements OnInit, OnDestroy {
  categories: SolutionCategory[] = [];
  hoveredCards: Set<string> = new Set();
  isMobile: boolean = false;
  private mobileIntervals: Map<string, ReturnType<typeof setInterval>> = new Map();
  
  // Controle de seções ativas
  activeSection: 'sistemas' | 'presenca' | 'consultoria' | null = null;
  previousSection: 'sistemas' | 'presenca' | 'consultoria' | null = null;
  
  // Controle do modal de plano
  selectedPlan: string | null = null;
  
  // Categorias específicas para cada seção
  sistemasCategory: SolutionCategory = {
    title: 'Sistemas de gestão e vendas para negócios locais',
    solutions: [],
    currentIndex: 0,
  };
  
  presencaCategory: SolutionCategory = {
    title: 'Presença digital, Sites Institucionais e Portfólios',
    solutions: [],
    currentIndex: 0,
  };

  constructor(private solutionsService: SolutionsService) {}

  ngOnInit(): void {
    const allSolutions = this.solutionsService.getSolutions();

    // Organizar soluções por categoria para os carrosséis
    this.categories = [
      {
        title: 'Sistemas de gestão e vendas para negócios locais',
        solutions: allSolutions.filter((s) =>
          ['ecommerce', 'barbearia', 'cardapio-digital'].includes(s.id)
        ),
        currentIndex: 0,
      },
      {
        title: 'Presença digital, Sites Institucionais e Portfólios',
        solutions: allSolutions.filter((s) =>
          ['portfolio-lais', 'sites-institucionais'].includes(s.id)
        ),
        currentIndex: 0,
      },
      {
        title: 'Consultoria Prática para Organização e Crescimento do Negócio',
        solutions: allSolutions.filter((s) =>
          ['gestao-consultoria', 'transformacao-digital'].includes(s.id)
        ),
        currentIndex: 0,
      },
    ];

    // Configurar categorias específicas para cada seção
    this.sistemasCategory = {
      title: 'Sistemas de gestão e vendas para negócios locais',
      solutions: allSolutions.filter((s) =>
        ['ecommerce', 'barbearia', 'cardapio-digital'].includes(s.id)
      ),
      currentIndex: 0,
    };

    this.presencaCategory = {
      title: 'Presença digital, Sites Institucionais e Portfólios',
      solutions: allSolutions.filter((s) =>
        ['portfolio-lais', 'sites-institucionais'].includes(s.id)
      ),
      currentIndex: 0,
    };

    // Detectar se é mobile e iniciar transições automáticas
    this.checkMobile();
    this.resizeHandler = () => this.checkMobile();
    window.addEventListener('resize', this.resizeHandler);
    
    // Iniciar transições automáticas para cards com hover em mobile
    setTimeout(() => this.startMobileTransitions(), 1000);
  }

  private resizeHandler?: () => void;

  ngOnDestroy(): void {
    // Limpar todos os intervals ao destruir o componente
    this.mobileIntervals.forEach((interval) => clearInterval(interval));
    this.mobileIntervals.clear();
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }

  checkMobile(): void {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      // Se não é mobile, limpar todos os intervals
      this.mobileIntervals.forEach((interval) => clearInterval(interval));
      this.mobileIntervals.clear();
      this.hoveredCards.clear();
    } else {
      // Se é mobile, reiniciar transições
      setTimeout(() => this.startMobileTransitions(), 100);
    }
  }

  startMobileTransitions(): void {
    if (!this.isMobile) return;

    this.categories.forEach((category) => {
      category.solutions.forEach((solution) => {
        if (solution.hoverImage && solution.isImageCard) {
          const cardId = solution.id;
          
          // Limpar interval anterior se existir
          if (this.mobileIntervals.has(cardId)) {
            clearInterval(this.mobileIntervals.get(cardId)!);
          }

          // Criar interval para alternar entre estados
          const interval = setInterval(() => {
            if (this.hoveredCards.has(cardId)) {
              this.hoveredCards.delete(cardId);
            } else {
              this.hoveredCards.add(cardId);
            }
          }, 3000); // Alterna a cada 3 segundos

          this.mobileIntervals.set(cardId, interval);
        }
      });
    });
  }

  isCardHovered(solutionId: string): boolean {
    return this.hoveredCards.has(solutionId);
  }

  openSolution(solution: Solution): void {
    this.solutionsService.openModal(solution);
  }

  nextSlide(category: SolutionCategory): void {
    if (category.solutions.length > 0) {
      category.currentIndex =
        (category.currentIndex + 1) % category.solutions.length;
    }
  }

  prevSlide(category: SolutionCategory): void {
    if (category.solutions.length > 0) {
      category.currentIndex =
        (category.currentIndex - 1 + category.solutions.length) %
        category.solutions.length;
    }
  }

  goToSlide(category: SolutionCategory, index: number): void {
    category.currentIndex = index;
  }

  openLink(url: string): void {
    window.open(url, '_blank');
  }

  setActiveSection(section: 'sistemas' | 'presenca' | 'consultoria'): void {
    if (this.activeSection !== section) {
      this.previousSection = this.activeSection;
      this.activeSection = section;
    }
  }

  openPlanModal(planName: string): void {
    this.selectedPlan = planName;
    document.body.style.overflow = 'hidden';
  }

  closePlanModal(): void {
    this.selectedPlan = null;
    document.body.style.overflow = '';
  }

  getWhatsAppLink(planName: string): string {
    const phoneNumber = '5511982539200';
    const message = encodeURIComponent(`Olha Thiers, gostaria de dar inicio no Plano ${planName}.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }
}
