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
    this.heroTitle =
      'Nós impulsionamos pequenas e médias empresas a crescer, ganhar eficiência e vender mais com tecnologia.';

    // Obtém a cidade do usuário baseada no IP apenas para log
    this.geolocationService.getCityByIP().subscribe((city) => {
      this.cityName = city;
      console.log('Cidade atuação : +', city);
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
