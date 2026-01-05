import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('heroVideo', { static: false })
  videoRef!: ElementRef<HTMLVideoElement>;

  shouldLoadVideo = false;
  shouldShowImage = false;

  constructor(private whatsappService: WhatsAppService) {}

  ngOnInit(): void {
    // Verifica se o vídeo já foi carregado anteriormente e há quanto tempo
    const videoLoadedTimestamp = localStorage.getItem(
      'thiers-video-loaded-timestamp'
    );
    const now = Date.now();
    const thirtyMinutes = 1 * 60 * 1000; // 30 minutos em milissegundos

    if (!videoLoadedTimestamp) {
      // Se nunca foi carregado, marca para carregar o vídeo
      this.shouldLoadVideo = true;
      // Marca no localStorage o timestamp atual
      localStorage.setItem('thiers-video-loaded-timestamp', now.toString());
    } else {
      const lastLoaded = parseInt(videoLoadedTimestamp, 10);
      const timeSinceLastLoad = now - lastLoaded;

      if (timeSinceLastLoad >= thirtyMinutes) {
        // Se passaram 30 minutos ou mais, mostra o vídeo novamente
        this.shouldLoadVideo = true;
        // Atualiza o timestamp
        localStorage.setItem('thiers-video-loaded-timestamp', now.toString());
      } else {
        // Se ainda não passaram 30 minutos, mostra a imagem
        this.shouldShowImage = true;
      }
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
        // Atualiza o timestamp quando o vídeo termina
        localStorage.setItem(
          'thiers-video-loaded-timestamp',
          Date.now().toString()
        );
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
