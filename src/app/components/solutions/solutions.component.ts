import { Component, OnInit } from '@angular/core';
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
export class SolutionsComponent implements OnInit {
  categories: SolutionCategory[] = [];

  constructor(private solutionsService: SolutionsService) {}

  ngOnInit(): void {
    const allSolutions = this.solutionsService.getSolutions();

    // Organizar soluções por categoria
    this.categories = [
      {
        title: 'Sistemas de gestão e vendas para negócios locais',
        solutions: allSolutions.filter((s) =>
          ['ecommerce', 'barbearia'].includes(s.id)
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
}
