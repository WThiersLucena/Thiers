import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-landing-solution-page',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './landing-solution-page.component.html',
  styleUrl: './landing-solution-page.component.css',
})
export class LandingSolutionPageComponent {
  constructor(private readonly whatsapp: WhatsAppService) {}

  openDemoInterest(): void {
    this.whatsapp.openWhatsApp(
      'Olá! Vim da página de landing pages sob medida e quero ver uma demonstração ou exemplos reais.',
    );
  }

  openPlanInterest(): void {
    this.whatsapp.openWhatsApp(
      'Olá! Tenho interesse em uma landing page sob medida com a Thiers. Podemos alinhar escopo, prazo e investimento?',
    );
  }

  openFinalCta(): void {
    this.whatsapp.openWhatsApp(
      'Olá! Quero uma landing focada em conversão com a Thiers. Qual o próximo passo?',
    );
  }
}
