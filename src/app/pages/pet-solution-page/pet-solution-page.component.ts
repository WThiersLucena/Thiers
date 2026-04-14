import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-pet-solution-page',
  imports: [HeaderComponent, FooterComponent, RouterLink],
  templateUrl: './pet-solution-page.component.html',
  styleUrl: './pet-solution-page.component.css',
})
export class PetSolutionPageComponent {
  constructor(private readonly whatsapp: WhatsAppService) {}

  /** Demonstração / interesse — mensagem pré-preenchida para fechamento. */
  openDemoInterest(): void {
    this.whatsapp.openWhatsApp(
      'Olá! Vim da página Thiers Pet e quero ver uma demonstração na prática.',
    );
  }

  openPlanInterest(): void {
    this.whatsapp.openWhatsApp(
      'Olá! Tenho interesse no plano Thiers Pet (clínica / pet shop / banho e tosa). Podemos alinhar valores e escopo?',
    );
  }

  openFinalCta(): void {
    this.whatsapp.openWhatsApp(
      'Olá! Quero aumentar minha agenda e fidelizar clientes no segmento pet com a Thiers. Qual o próximo passo?',
    );
  }
}
