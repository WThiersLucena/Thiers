import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

/** Card exibido nas coleções (estilo catálogo de soluções). */
interface SolutionsCatalogCard {
  badge?: string;
  title: string;
  description: string;
  ctaLabel: string;
  /** Caminho público (ex.: assets/...) quando o card tiver miniatura. */
  imageUrl?: string;
  /** Se definido, o CTA navega para esta rota em vez do contato na home. */
  ctaRouterLink?: string;
}

@Component({
  selector: 'app-solutions-page',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './solutions-page.component.html',
  styleUrl: './solutions-page.component.css',
})
export class SolutionsPageComponent {
  /** Alimentação & PDV */
  readonly alimentacaoPdv: SolutionsCatalogCard[] = [
    {
      badge: 'Mais procurado',
      title: 'Gestão para alimentação',
      description:
        'PDV, controle de caixa, estoque e delivery com painel administrativo para escalar seu negócio.',
      ctaLabel: 'Falar sobre o projeto',
    },
    {
      badge: 'Premium',
      title: 'PDV + cardápio digital',
      description:
        'Integração entre cozinha, mesas e cardápio online. Controle de custos e pedidos em um só lugar.',
      ctaLabel: 'Falar sobre o projeto',
    },
    {
      badge: 'Operação',
      title: 'PDV bares e distribuidoras',
      description:
        'Gestão de estoque, fiado e múltiplas mesas ou comandas com fluxo rápido em horários de pico.',
      ctaLabel: 'Falar sobre o projeto',
    },
    {
      badge: 'SaaS',
      title: 'Cardápio pelo WhatsApp',
      description:
        'Seu cliente monta o pedido no navegador e você recebe organizado para produção e entrega.',
      ctaLabel: 'Falar sobre o projeto',
    },
  ];

  /** Agendamento online & gestão */
  readonly agendamentoGestao: SolutionsCatalogCard[] = [
    {
      badge: 'Novo',
      title: 'Agenda para clínicas',
      description:
        'Agenda híbrida, prontuário simplificado, financeiro e portal do paciente em uma base única.',
      ctaLabel: 'Falar sobre o projeto',
    },
    {
      badge: 'Agendamento',
      title: 'Salão de beleza e estúdio',
      description:
        'Transforme a primeira impressão em fidelização: agenda e vitrine integradas para quem quer agenda cheia, menos faltas e clareza financeira sem vender barato por parecer improviso.',
      ctaLabel: 'Veja na prática',
      imageUrl: 'assets/Thiers-Beauty-Studio.png',
      ctaRouterLink: '/solucoes/sistema-salao-beleza',
    },
    {
      badge: 'Beleza',
      title: 'Profissionais autônomos',
      description:
        'Agenda, serviços e vitrine com visual profissional para converter visitas em reservas.',
      ctaLabel: 'Falar sobre o projeto',
    },
    {
      badge: 'Pet care',
      title: 'Thiers Pet',
      description:
        'Para clínicas, pet shops e banho & tosa: fidelize seus clientes e aumente sua agenda de forma eficaz. Valor claro ao seu serviço, sem complicar a operação.',
      ctaLabel: 'Veja na prática',
      imageUrl: 'assets/Thiers-Pet.png',
      ctaRouterLink: '/solucoes/sistema-pet',
    },
  ];

  /** Sites & landing pages */
  readonly sitesLanding: SolutionsCatalogCard[] = [
    {
      badge: 'Alta conversão',
      title: 'Landing pages sob medida',
      description:
        'Páginas rápidas e exclusivas para transformar visitantes em contatos e vendas: mensagem direta, marca forte e foco no próximo passo.',
      ctaLabel: 'Veja na prática',
      imageUrl: 'assets/Landing.png',
      ctaRouterLink: '/solucoes/landing-pages-sob-medida',
    },
    {
      badge: 'Institucional',
      title: 'Site + presença digital',
      description:
        'Identidade online coerente com seu cardápio, portfólio ou catálogo integrado quando fizer sentido.',
      ctaLabel: 'Falar sobre o projeto',
    },
  ];
}
