import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SaasCard {
  title: string;
  icon?: string;
  image?: string;
  link?: string;
}

export interface Solution {
  id: string;
  title: string;
  icon: string;
  description: string;
  content: string;
  saasCards?: SaasCard[];
  isTextCard?: boolean;
  isImageCard?: boolean;
  isCustomCard?: boolean;
  image?: string;
  link?: string;
  textContent?: string[];
  examples?: SaasCard[];
  customTitle?: string;
  customTextLines?: string[];
  customFooterText?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SolutionsService {
  private solutions: Solution[] = [
    {
      id: 'gestao-consultoria',
      title: 'Gestão e Consultoria Empresarial',
      icon: '📋',
      description:
        'A estrutura que sua empresa precisa para não apenas operar, mas prosperar',
      content: `
        <p>Comunicação ineficaz, falta de planejamento estratégico, desorganização financeira, resistência à tecnologia,</p>
        
        <p>Enquanto as grandes empresas contam com departamentos especializados em gestão estratégica, muitos negócios de pequeno e médio porte navegam sem uma bússola clara. Nossa missão é mudar isso: oferecemos metodologias de gestão aplicáveis e personalizadas para transformar desafios diários em vantagens competitivas.</p>
        
        <p>Traduzimos teorias administrativas em planos de ação, guiados por um princípio fundamental:</p>
        
        <blockquote style="border-left: 4px solid var(--primary-color); padding-left: var(--spacing-md); margin: var(--spacing-lg) 0; font-style: italic; color: var(--text-secondary);">
          "Uma gestão eficaz é aquela que alinha recursos, processos e pessoas a uma estratégia clara, transformando complexidade em clareza e intenção em resultado."
        </blockquote>
      `,
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce',
      icon: '🛍️',
      description: 'Soluções de e-commerce completas para seu negócio',
      content: `
        <h2>Ecommerce</h2>
        <p>Soluções de e-commerce completas e personalizadas para transformar seu negócio em uma loja virtual de sucesso.</p>
      `,
      image: 'assets/Ecomerce.jpg',
      link: 'https://x1-neon.vercel.app/home',
      isImageCard: true,
    },
    {
      id: 'barbearia',
      title: 'Barbearia',
      icon: '✂️',
      description: 'Sistema completo para gestão de barbearias',
      content: `
        <h2>Barbearia</h2>
        <p>Sistema completo para gestão de barbearias, agendamentos e atendimento ao cliente.</p>
      `,
      image: 'assets/Barbearia.jpg',
      link: 'https://thiers-barbearia.vercel.app/',
      isImageCard: true,
    },
    {
      id: 'cardapio-digital',
      title: 'Cardápios Digitais',
      icon: '📱',
      description: 'Cardápios digitais interativos para restaurantes',
      content: `
        <h2>Cardápios Digitais</h2>
        <p>Cardápios digitais interativos e modernos para restaurantes, bares e estabelecimentos gastronômicos.</p>
      `,
      image: 'assets/CardápioDig.png',
      link: 'https://card-dig.vercel.app/',
      isImageCard: true,
    },
    {
      id: 'transformacao-digital',
      title: 'Transformação Digital',
      icon: '🚀',
      description:
        'Acelere a transformação digital da sua empresa com soluções inovadoras',
      content: `
        <h2>Planilhas x Sistemas de gestão</h2>
        <p>A transformação digital é essencial para empresas que desejam se manter competitivas no mercado atual. Nossa equipe especializada trabalha com você para identificar oportunidades de melhoria e implementar soluções tecnológicas que impulsionam o crescimento do seu negócio.</p>
        
        <h3>Nossos Serviços:</h3>
        <ul>
          <li>Análise e diagnóstico de processos.</li>
          <li>Implementação de tecnologias modernas.</li>
          <li>Automação de processos.</li>
          <li>Migração para ambientes cloud.</li>
          <li>Treinamento e capacitação de equipes.</li>
        </ul>
        
        <p>Com a Thiers, sua empresa terá um parceiro tecnológico sempre atualizado e pronto para enfrentar os maiores desafios, sempre com excelência e agilidade.</p>
      `,
    },
    {
      id: 'portfolio-lais',
      title: 'Portfólios',
      icon: '🎨',
      description: 'Portfólios',
      content: `
        <h2>Portfólios</h2>
        <p>Portfólios personalizados e profissionais para destacar seu trabalho.</p>
      `,
      image: 'assets/Lais.jpg',
      link: 'https://lais-ayumi.vercel.app/',
      isImageCard: true,
    },
    {
      id: 'sites-institucionais',
      title: 'Sites Institucionais',
      icon: '🏢',
      description: 'Sites Institucionais',
      content: `
        <h2>Sites Institucionais</h2>
        <p><strong>Quando você precisa </strong>de algum produto ou serviço <strong>onde procura?</strong></p>
        <p>Se <strong>você não está no Google</strong>, seu cliente não lhe encontrará no <strong>Instagram</strong>, nem no <strong>Facebook</strong>.</p>
        <p><strong>SuaEmpresa.com, é a solução.</strong></p>
        
        <h3>Por que ter um site institucional?</h3>
        <ul>
          <li><strong>Presença 24/7:</strong> Seu negócio está sempre disponível, mesmo fora do horário comercial</li>
          <li><strong>Credibilidade:</strong> Empresas com site são vistas como mais confiáveis e profissionais</li>
          <li><strong>Visibilidade:</strong> Apareça no Google quando clientes procurarem seus produtos ou serviços</li>
          <li><strong>Informações sempre atualizadas:</strong> Compartilhe novidades, promoções e informações importantes instantaneamente</li>
          <li><strong>Contato facilitado:</strong> Clientes encontram seus dados de contato, endereço e redes sociais em um só lugar</li>
          <li><strong>Diferencial competitivo:</strong> Destaque-se da concorrência que ainda não tem presença digital</li>
        </ul>
        
        <p>Um site institucional é o primeiro passo para estabelecer sua marca na internet e conquistar novos clientes.</p>
      `,
      image: 'assets/Avakian.jpg',
      link: '',
      isImageCard: true,
    },
  ];

  private selectedSolution$ = new BehaviorSubject<Solution | null>(null);
  private isModalOpen$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  getSolutions(): Solution[] {
    return this.solutions;
  }

  getSolutionById(id: string): Solution | undefined {
    return this.solutions.find((s) => s.id === id);
  }

  openModal(solution: Solution): void {
    this.selectedSolution$.next(solution);
    this.isModalOpen$.next(true);
    document.body.style.overflow = 'hidden'; // Previne scroll do body
  }

  closeModal(): void {
    this.selectedSolution$.next(null);
    this.isModalOpen$.next(false);
    document.body.style.overflow = ''; // Restaura scroll do body
  }

  getSelectedSolution(): Observable<Solution | null> {
    return this.selectedSolution$.asObservable();
  }

  getIsModalOpen(): Observable<boolean> {
    return this.isModalOpen$.asObservable();
  }
}
