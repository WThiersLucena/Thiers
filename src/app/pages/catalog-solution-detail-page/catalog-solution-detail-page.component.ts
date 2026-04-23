import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsAppService } from '../../services/whatsapp.service';
import { CATALOG_SOLUTION_PRESETS } from './catalog-solution-detail.presets';
import type { CatalogSolutionDetailData } from './catalog-solution-detail.types';

type ShowcaseLoopPhase = 'v1' | 'img1' | 'v2' | 'img2';

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
  private readonly destroyRef = inject(DestroyRef);
  private readonly whatsapp = inject(WhatsAppService);

  data: CatalogSolutionDetailData | null = null;

  /** Fases do showcase com vídeos (apenas quando `data.showcaseSequence` existe). */
  readonly showcasePhase = signal<ShowcaseLoopPhase>('v1');

  private pauseTimer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.destroyRef.onDestroy(() => this.clearPauseTimer());
    this.route.data
      .pipe(
        map((d) => d['catalogKey'] as string),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((key) => {
        this.clearPauseTimer();
        const preset = CATALOG_SOLUTION_PRESETS[key];
        if (!preset) {
          void this.router.navigate(['/solucoes']);
          return;
        }
        this.data = preset;
        this.showcasePhase.set('v1');
      });
  }

  /** Garante que o showcase não reproduza áudio (reforço no 2º vídeo após gestos na página). */
  applySilentPlayback(ev: Event): void {
    const el = ev.currentTarget;
    if (!(el instanceof HTMLVideoElement)) return;
    if (el.muted && el.volume === 0) return;
    el.defaultMuted = true;
    el.muted = true;
    el.volume = 0;
  }

  onIntroVideoEnded(): void {
    const seq = this.data?.showcaseSequence;
    if (!seq) return;
    this.clearPauseTimer();
    this.showcasePhase.set('img1');
    this.pauseTimer = setTimeout(() => {
      this.pauseTimer = null;
      this.showcasePhase.set('v2');
    }, seq.imageAfterIntroMs);
  }

  onTransitionVideoEnded(): void {
    const seq = this.data?.showcaseSequence;
    if (!seq) return;
    this.clearPauseTimer();
    this.showcasePhase.set('img2');
    this.pauseTimer = setTimeout(() => {
      this.pauseTimer = null;
      this.showcasePhase.set('v1');
    }, seq.imageAfterTransitionMs);
  }

  private clearPauseTimer(): void {
    if (this.pauseTimer != null) {
      clearTimeout(this.pauseTimer);
      this.pauseTimer = null;
    }
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
