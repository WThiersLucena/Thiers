import { Component } from '@angular/core';
import { WhatsAppService } from '../../services/whatsapp.service';

/** Faixa final da home com CTA para WhatsApp. */
@Component({
  selector: 'app-home-final-cta',
  imports: [],
  templateUrl: './home-final-cta.component.html',
  styleUrl: './home-final-cta.component.css',
})
export class HomeFinalCtaComponent {
  constructor(private whatsapp: WhatsAppService) {}

  openWhatsApp(): void {
    this.whatsapp.openWhatsApp(
      'Olá! Quero tirar minha ideia do papel com um site da Thiers.'
    );
  }
}
