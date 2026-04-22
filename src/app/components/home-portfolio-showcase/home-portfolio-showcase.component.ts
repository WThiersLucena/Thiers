import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface PortfolioTile {
  src: string;
  alt: string;
  area: 'a' | 'b' | 'e' | 'f';
  objectPosition?: string;
}

interface StripItem {
  src: string;
  alt: string;
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
    },
    {
      src: 'assets/Landing.png',
      alt: 'Landing page sob medida',
    },
  ];

  readonly topTiles: PortfolioTile[] = [
    {
      src: 'assets/Thiers-Beauty-Studio.png',
      alt: 'Thiers Beauty Studio — sistema de agendamento',
      area: 'a',
      objectPosition: 'center 40%',
    },
    {
      src: 'assets/Thiers-Pet.png',
      alt: 'Thiers Pet — solução para pet care',
      area: 'b',
      objectPosition: 'center center',
    },
  ];

  readonly rightTiles: PortfolioTile[] = [
    {
      src: 'assets/avakian.png',
      alt: 'Site institucional Avakian',
      area: 'e',
      objectPosition: 'center center',
    },
    {
      src: 'assets/Odonto.png',
      alt: 'Thiers Odonto — clínica e agendamento',
      area: 'f',
      objectPosition: 'center center',
    },
  ];
}
