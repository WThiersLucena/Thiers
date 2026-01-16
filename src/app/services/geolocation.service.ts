import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private readonly FALLBACK_CITY = 'São Paulo';

  constructor() {}

  /**
   * Obtém a cidade do usuário baseada no IP
   * Usa fetch diretamente para contornar problemas de CORS
   * Tenta múltiplas APIs em sequência até encontrar uma que funcione
   * @returns Observable com o nome da cidade ou cidade padrão em caso de erro
   */
  getCityByIP(): Observable<string> {
    return new Observable<string>((observer) => {
      this.tryGetCity()
        .then((city) => {
          observer.next(city);
          observer.complete();
        })
        .catch(() => {
          observer.next(this.FALLBACK_CITY);
          observer.complete();
        });
    });
  }

  /**
   * Tenta obter a cidade usando múltiplas APIs
   */
  private async tryGetCity(): Promise<string> {
    // Tenta API 1: geojs.io (HTTPS, bom suporte a CORS)
    try {
      const response1 = await fetch('https://get.geojs.io/v1/ip/geo.json', {
        method: 'GET',
        mode: 'cors',
      });
      if (response1.ok) {
        const data = await response1.json();
        if (data.city) {
          return data.city;
        }
      }
    } catch (error) {
      // Continua para próxima tentativa
    }

    // Tenta API 2: ip-api.com via proxy CORS
    try {
      const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('http://ip-api.com/json/?fields=status,message,city');
      const response2 = await fetch(proxyUrl, {
        method: 'GET',
        mode: 'cors',
      });
      if (response2.ok) {
        const proxyData = await response2.json();
        const data = JSON.parse(proxyData.contents);
        if (data.status === 'success' && data.city) {
          return data.city;
        }
      }
    } catch (error) {
      // Continua para próxima tentativa
    }

    // Tenta API 3: ipapi.co via proxy CORS
    try {
      const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://ipapi.co/json/');
      const response3 = await fetch(proxyUrl, {
        method: 'GET',
        mode: 'cors',
      });
      if (response3.ok) {
        const proxyData = await response3.json();
        const data = JSON.parse(proxyData.contents);
        if (data.city) {
          return data.city;
        }
      }
    } catch (error) {
      // Se todas falharem, retorna fallback
    }

    return this.FALLBACK_CITY;
  }
}
