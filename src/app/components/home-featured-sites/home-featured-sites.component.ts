import { Component } from '@angular/core';

/** Destaque da home: sites rápidos e otimizados (bloco escuro do layout). */
@Component({
  selector: 'app-home-featured-sites',
  imports: [],
  templateUrl: './home-featured-sites.component.html',
  styleUrl: './home-featured-sites.component.css',
})
export class HomeFeaturedSitesComponent {
  readonly highlights: { id: string; label: string }[] = [
    { id: 'bolt', label: 'Carregamento ultra-rápido' },
    { id: 'mobile', label: 'Design adaptável para todas as telas' },
    { id: 'chart', label: 'Otimizado para resultados' },
  ];
}
