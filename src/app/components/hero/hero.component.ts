import { Component, OnInit } from '@angular/core';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  showContent = false;

  constructor(private whatsappService: WhatsAppService) {}

  ngOnInit(): void {
    requestAnimationFrame(() => {
      this.showContent = true;
    });
  }

  openSiteLead(): void {
    this.whatsappService.openWhatsApp(
      'Olá! Gostaria de criar meu site com a Thiers.'
    );
  }
}
