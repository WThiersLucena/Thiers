import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsAppService } from '../../services/whatsapp.service';
import { CATALOG_SOLUTION_PRESETS } from './catalog-solution-detail.presets';
import type { CatalogSolutionDetailData } from './catalog-solution-detail.types';

/** Página de detalhe genérica do catálogo (mesmo fluxo visual do salão / landing). */
@Component({
  selector: 'app-catalog-solution-detail-page',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './catalog-solution-detail-page.component.html',
  styleUrl: './catalog-solution-detail-page.component.css',
})
export class CatalogSolutionDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly whatsapp = inject(WhatsAppService);

  data: CatalogSolutionDetailData | null = null;

  ngOnInit(): void {
    const key = this.route.snapshot.data['catalogKey'] as string;
    const preset = CATALOG_SOLUTION_PRESETS[key];
    if (!preset) {
      void this.router.navigate(['/solucoes']);
      return;
    }
    this.data = preset;
  }

  openDemoInterest(): void {
    if (!this.data) return;
    this.whatsapp.openWhatsApp(this.data.waDemo);
  }

  openPlanInterest(): void {
    if (!this.data) return;
    this.whatsapp.openWhatsApp(this.data.waPlan);
  }

  openFinalCta(): void {
    if (!this.data) return;
    this.whatsapp.openWhatsApp(this.data.waFinal);
  }
}
