import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {
  private readonly phoneNumber = '5511982539200';
  private readonly defaultMessage = 'Ola gostaria de saber mais detalhes sobre suas soluções';

  openWhatsApp(message?: string): void {
    const text = encodeURIComponent(message || this.defaultMessage);
    const url = `https://wa.me/${this.phoneNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
