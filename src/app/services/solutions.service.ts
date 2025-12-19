import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface SaasCard {
  title: string;
  icon: string;
  link?: string;
}

export interface Solution {
  id: string;
  title: string;
  icon: string;
  description: string;
  content: string;
  saasCards?: SaasCard[];
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
        <h2>Gestão e Consultoria Empresarial</h2>
        <p>A estrutura que sua empresa precisa para não apenas operar, mas prosperar.</p>
        
        <p>Enquanto as grandes empresas contam com departamentos especializados em gestão estratégica, muitos negócios de pequeno e médio porte navegam sem uma bússola clara. Nossa missão é mudar isso: oferecemos metodologias de gestão aplicáveis e personalizadas para transformar desafios diários em vantagens competitivas.</p>
        
        <p>Traduzimos teorias administrativas em planos de ação, guiados por um princípio fundamental:</p>
        
        <blockquote style="border-left: 4px solid var(--primary-color); padding-left: var(--spacing-md); margin: var(--spacing-lg) 0; font-style: italic; color: var(--text-secondary);">
          "Uma gestão eficaz é aquela que alinha recursos, processos e pessoas a uma estratégia clara, transformando complexidade em clareza e intenção em resultado."
        </blockquote>
      `,
    },
    {
      id: 'saas',
      title: 'SaaS',
      icon: '💻',
      description: 'Soluções SaaS escaláveis e personalizadas para seu negócio',
      content: `
        <h2>SaaS - Software como Serviço</h2>
        <p>O Software como Serviço (SaaS) revoluciona a forma como as empresas utilizam tecnologia, oferecendo acesso a aplicações poderosas através da nuvem, sem necessidade de instalação ou manutenção de infraestrutura própria.</p>
        
        <h3>Principais Vantagens do SaaS:</h3>
        <ul>
          <li><strong>Acessibilidade:</strong> Acesso de qualquer lugar, a qualquer momento, através de qualquer dispositivo conectado à internet</li>
          <li><strong>Economia de Custos:</strong> Eliminação de investimentos em hardware, licenças e manutenção, com modelos de assinatura flexíveis</li>
          <li><strong>Atualizações Automáticas:</strong> Sempre com a versão mais recente, sem necessidade de intervenção manual</li>
          <li><strong>Escalabilidade:</strong> Ajuste rápido de recursos conforme a necessidade do negócio</li>
          <li><strong>Segurança:</strong> Proteção de dados gerenciada por especialistas, com backups automáticos e conformidade regulatória</li>
          <li><strong>Colaboração:</strong> Facilita o trabalho em equipe com acesso compartilhado e sincronização em tempo real</li>
        </ul>
        
        <p>Com soluções SaaS da Thiers, sua empresa ganha agilidade, reduz custos e foca no que realmente importa: o crescimento do seu negócio.</p>
      `,
      saasCards: [
        {
          title: 'Ecommerce',
          icon: '🛒',
          link: 'https://x1-neon.vercel.app/home',
        },
        {
          title: 'Empresarial',
          icon: '🏭',
        },
        {
          title: 'Dedicados',
          icon: '📈',
        },
      ],
    },
    {
      id: 'transformacao-digital',
      title: 'Transformação Digital',
      icon: '🚀',
      description:
        'Acelere a transformação digital da sua empresa com soluções inovadoras',
      content: `
        <h2>Transformação Digital</h2>
        <p>A transformação digital é essencial para empresas que desejam se manter competitivas no mercado atual. Nossa equipe especializada trabalha com você para identificar oportunidades de melhoria e implementar soluções tecnológicas que impulsionam o crescimento do seu negócio.</p>
        
        <h3>Nossos Serviços:</h3>
        <ul>
          <li>Análise e diagnóstico de processos</li>
          <li>Implementação de tecnologias modernas</li>
          <li>Automação de processos</li>
          <li>Migração para ambientes cloud</li>
          <li>Treinamento e capacitação de equipes</li>
        </ul>
        
        <p>Com a Thiers, sua empresa terá um parceiro tecnológico sempre atualizado e pronto para enfrentar os maiores desafios, sempre com excelência e agilidade.</p>
      `,
    },
    {
      id: 'ciberseguranca',
      title: 'Cibersegurança',
      icon: '🔒',
      description:
        'Proteja seus dados e sistemas com soluções de segurança de última geração',
      content: `
        <h2>Cibersegurança</h2>
        <p>Em um mundo cada vez mais digital, a segurança da informação é fundamental. A Thiers oferece soluções completas de cibersegurança para proteger seus dados, sistemas e infraestrutura contra ameaças cibernéticas.</p>
        
        <h3>Nossas Soluções:</h3>
        <ul>
          <li>Análise de vulnerabilidades e pentest</li>
          <li>Monitoramento 24/7 (SOC)</li>
          <li>Gestão de identidade e acesso</li>
          <li>Criptografia de dados</li>
          <li>Conformidade com LGPD e regulamentações</li>
          <li>Treinamento em segurança para equipes</li>
        </ul>
        
        <p>Proteja seu negócio com as melhores práticas de segurança da informação e mantenha a confiança dos seus clientes.</p>
      `,
    },
    {
      id: 'ia',
      title: 'IA',
      icon: '🤖',
      description:
        'Inteligência Artificial para otimizar processos e tomar decisões mais inteligentes',
      content: `
        <h2>Inteligência Artificial</h2>
        <p>A Inteligência Artificial está revolucionando a forma como as empresas operam. Nossas soluções de IA são desenvolvidas para resolver problemas reais do seu negócio, desde automação de tarefas até análise preditiva avançada.</p>
        
        <h3>O que oferecemos:</h3>
        <ul>
          <li>Chatbots e assistentes virtuais inteligentes</li>
          <li>Análise preditiva e machine learning</li>
          <li>Processamento de linguagem natural</li>
          <li>Visão computacional e reconhecimento de imagens</li>
          <li>Recomendações personalizadas</li>
        </ul>
        
        <p>Nossas soluções de IA são customizadas para atender às necessidades específicas do seu negócio, garantindo resultados mensuráveis e impacto real.</p>
      `,
    },
    {
      id: 'cloud',
      title: 'Cloud',
      icon: '☁️',
      description:
        'Migração e gestão de infraestrutura em nuvem para escalabilidade e eficiência',
      content: `
        <h2>Cloud</h2>
        <p>A nuvem oferece escalabilidade, flexibilidade e redução de custos. Nossa equipe especializada ajuda você a migrar e gerenciar sua infraestrutura na nuvem com segurança e eficiência.</p>
        
        <h3>Serviços Cloud:</h3>
        <ul>
          <li>Migração para AWS, Azure ou GCP</li>
          <li>Arquitetura cloud-native</li>
          <li>DevOps e CI/CD</li>
          <li>Monitoramento e otimização de custos</li>
          <li>Backup e disaster recovery</li>
          <li>Multi-cloud e hybrid cloud</li>
        </ul>
        
        <p>Maximize os benefícios da nuvem com uma estratégia bem planejada e implementação especializada.</p>
      `,
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
