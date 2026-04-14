import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-salon-beauty-solution-page',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './salon-beauty-solution-page.component.html',
  styleUrl: './salon-beauty-solution-page.component.css',
})
export class SalonBeautySolutionPageComponent {
  constructor(private readonly whatsapp: WhatsAppService) {}

  /** Demonstração / interesse mensagem pré-preenchida para fechamento. */
  openDemoInterest(): void {
    this.whatsapp.openWhatsApp(
      'Olá! Vim da página do sistema para salão de beleza e estúdio e quero ver uma demonstração na prática.',
    );
  }

  openPlanInterest(): void {
    this.whatsapp.openWhatsApp(
      'Olá! Tenho interesse no plano para salão de beleza / estúdio. Podemos alinhar valores e escopo?',
    );
  }

  openFinalCta(): void {
    this.whatsapp.openWhatsApp(
      'Olá! Quero profissionalizar a agenda do meu salão com a Thiers. Qual o próximo passo?',
    );
  }
}
