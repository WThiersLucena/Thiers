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
      title: 'Operações para restaurante, do salão à cozinha.',
      description:
        'Controle: Salão, Pedidos, Cozinha, Mesas, Cardapios, Estoque. De forma agil e itegrada. Controle processos, encante seu cliente.',
      ctaLabel: 'Veja na prática',
      imageUrl: 'assets/Restaurante.png',
      ctaRouterLink: '/solucoes/restaurante-gestao',
    },
    {
      badge: 'Maior comodidade',
      title: 'Cardápio digital',
      description:
        'Cardápio impresso? Desatualizdo? Improvisado? Cardápios digitais , acessiveis na palma da mao do seu cliente, atualizados e modernos. Nao espere o garçon entregar o cardapio, leia nosso Qrcode e faça seu pedido',
      ctaLabel: 'Falar sobre o projeto',
      imageUrl: 'assets/Cardapio.jpg',
    },

    // {
    //   badge: 'Operação',
    //   title: 'PDV bares e distribuidoras',
    //   description:
    //     'Gestão de estoque, fiado e múltiplas mesas ou comandas com fluxo rápido em horários de pico.',
    //   ctaLabel: 'Falar sobre o projeto',
    // },
    {
      badge: 'Automatize seu WhatsApp',
      title: 'Cardápio pelo WhatsApp',
      description:
        'Seu cliente monta o pedido no navegador e você recebe organizado para produção e entrega.',
      ctaLabel: 'Falar sobre o projeto',
    },
  ];

  /** Agendamento online & gestão */
  readonly agendamentoGestao: SolutionsCatalogCard[] = [
    {
      badge: 'Clínicas',
      title: 'Gestão para clínicas',
      description:
        'Agendamento on-line, Gestao de multiplas agendas, prontuário simplificado, financeiro e portal do paciente em uma base única. Aumente a percepção de valor a seu cliente',
      ctaLabel: 'Reflita o seu profissionalismo',
      imageUrl: 'assets/Odonto.png',
      ctaRouterLink: '/solucoes/agenda-clinicas',
    },
    {
      badge: 'Gestão e Estetica',
      title: 'Salão de Beleza e Estúdio',
      description:
        'Transforme a primeira impressão em fidelização: agenda e vitrine integradas para quem quer agenda cheia, menos faltas e clareza financeira, sai do improviso.',
      ctaLabel: 'Veja na prática',
      imageUrl: 'assets/Thiers-Beauty-Studio.png',
      ctaRouterLink: '/solucoes/sistema-salao-beleza',
    },
    {
      badge: 'Profissionais autônomos',
      title: 'Personal trainer, Nutricionista, Massoterapeuta e etc',
      description:
        'Sua agenda, seus serviços e sua vitrine com padrão de empresa grande. Autônomo com padrão de empresa: mais cliente, menos confusão, zero retrabalho.',
      ctaLabel: 'Veja na prática',
      imageUrl: 'assets/Barbearia.png',
      ctaRouterLink: '/solucoes/profissionais-autonomos',
    },
    {
      badge: 'Pet care Promovendo bem-estar',
      title: 'Especialista em cuidados Pet',
      description:
        'Para clínicas, pet shops e banho e tosa: fidelize seus clientes e aumente sua agenda de forma eficaz. Valor claro ao seu serviço, sem complicar a operação mais reservas, menos furo, zero retrabalho.',
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
      ctaLabel: 'Adiquira o seu',
      imageUrl: 'assets/Landing.png',
      ctaRouterLink: '/solucoes/landing-pages-sob-medida',
    },
    {
      badge: 'Institucional/Empresarial',
      title: 'Site + presença digital',
      description:
        'Identidade online coerente com seu perfil, portfólio ou catálogo integrado quando fizer sentido.',
      ctaLabel: 'Saiba Mais',
      imageUrl: 'assets/avakian.png',
      ctaRouterLink: '/solucoes/site-institucional',
    },
  ];
}
