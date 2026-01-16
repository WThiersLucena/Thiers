import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../services/whatsapp.service';
import { GeolocationService } from '../../services/geolocation.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  cityName = '[SUA CIDADE]';
  heroTitle = '';
  showContent = false;

  constructor(
    private whatsappService: WhatsAppService,
    private geolocationService: GeolocationService
  ) {}

  ngOnInit(): void {
    // Texto base do hero
    const baseText =
      'Nós ajudamos pequenas e médias empresas de [SUA CIDADE] a vender mais, se organizar melhor e crescer usando tecnologia.';
    this.heroTitle = baseText;

    // Obtém a cidade do usuário baseada no IP
    this.geolocationService.getCityByIP().subscribe((city) => {
      this.cityName = city;
      this.heroTitle = baseText.replace('[SUA CIDADE]', city);
    });

    // Mostra o conteúdo com animação
    setTimeout(() => {
      this.showContent = true;
    }, 500);
  }

  openWhatsApp(): void {
    this.whatsappService.openWhatsApp();
  }
}
