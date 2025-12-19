import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('heroVideo', { static: false }) videoRef!: ElementRef<HTMLVideoElement>;
  
  shouldLoadVideo = false;
  shouldShowImage = false;

  constructor(private whatsappService: WhatsAppService) {}

  ngOnInit(): void {
    // Verifica se o vídeo já foi carregado anteriormente
    const videoLoaded = localStorage.getItem('thiers-video-loaded');
    
    if (!videoLoaded) {
      // Se não foi carregado, marca para carregar o vídeo
      this.shouldLoadVideo = true;
      // Marca no localStorage que o vídeo foi carregado
      localStorage.setItem('thiers-video-loaded', 'true');
    } else {
      // Se já foi carregado, mostra a imagem
      this.shouldShowImage = true;
    }
  }

  ngAfterViewInit(): void {
    // Só configura o vídeo se ele deve ser carregado
    if (this.shouldLoadVideo && this.videoRef?.nativeElement) {
      const video = this.videoRef.nativeElement;
      
      // Garante que o vídeo seja sempre mudo e sem áudio
      video.muted = true;
      video.volume = 0;
      video.setAttribute('muted', 'true');
      
      // Remove o loop para que o vídeo seja reproduzido apenas uma vez
      video.loop = false;
      
      // Quando o vídeo terminar, remove o elemento e mostra a imagem
      video.addEventListener('ended', () => {
        video.style.display = 'none';
        video.pause();
        video.removeAttribute('src');
        video.load();
        // Após o vídeo terminar, mostra a imagem
        this.shouldShowImage = true;
      });
      
      // Previne qualquer tentativa de ativar o áudio
      video.addEventListener('volumechange', () => {
        if (video.volume > 0) {
          video.volume = 0;
        }
        if (!video.muted) {
          video.muted = true;
        }
      });
    }
  }

  openWhatsApp(): void {
    this.whatsappService.openWhatsApp();
  }
}
