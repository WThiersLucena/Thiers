import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PortfolioTile {
  src: string;
  alt: string;
  area: 'a' | 'b' | 'e' | 'f';
  objectPosition?: string;
  /** Texto do selo no mesmo estilo dos cards em Soluções (opcional). */
  badge?: string;
  /** Cor de destaque do selo: verde “popular” ou cor primária “recomendado”. */
  badgeVariant?: 'popular' | 'recommended';
}

interface StripItem {
  src: string;
  alt: string;
  badge?: string;
  badgeVariant?: 'popular' | 'recommended';
}

/** Grade de portfólio na home — cada item leva à página Soluções. */
@Component({
  selector: 'app-home-portfolio-showcase',
  imports: [RouterLink],
  templateUrl: './home-portfolio-showcase.component.html',
  styleUrl: './home-portfolio-showcase.component.css',
})
export class HomePortfolioShowcaseComponent {
  readonly solucoesPath = '/solucoes';

  /** Faixa horizontal: dois cards (Lais + Landing). */
  readonly stripItems: StripItem[] = [
    {
      src: 'assets/Lais.jpg',
      alt: 'Portfólio Lais Ayumi — landing page',
      badge: 'Portfólio',
      badgeVariant: 'popular',
    },
    {
      src: 'assets/Landing.png',
      alt: 'Landing page sob medida',
      badge: 'Landing',
      badgeVariant: 'recommended',
    },
  ];

  readonly topTiles: PortfolioTile[] = [
    {
      src: 'assets/Thiers-Beauty-Studio.png',
      alt: 'Thiers Beauty Studio — sistema de agendamento',
      area: 'a',
      objectPosition: 'center 40%',
      badge: 'Beleza Estúdio e Estetica',
      // badge: ' Salão de Beleza e Estúdio Mais popular ⭐',
      badgeVariant: 'popular',
    },
    {
      src: 'assets/Thiers-Pet.png',
      alt: 'Thiers Pet — solução para pet care',
      area: 'b',
      objectPosition: 'center center',
      badge: 'Cuidados Pet',
      badgeVariant: 'recommended',
    },
  ];

  readonly rightTiles: PortfolioTile[] = [
    {
      src: 'assets/avakian.png',
      alt: 'Site institucional Avakian',
      area: 'e',
      objectPosition: 'center center',
      badge: 'Institucional',
      badgeVariant: 'popular',
    },
    {
      src: 'assets/Odonto.png',
      alt: 'Thiers Odonto — clínica e agendamento',
      area: 'f',
      objectPosition: 'center center',
      badge: 'Gestão para clínicas',
      badgeVariant: 'popular',
    },
  ];
}
