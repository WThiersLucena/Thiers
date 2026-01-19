import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { WhatsAppService } from '../../services/whatsapp.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isScrolled = false;
  lastScrollTop = 0;
  isHeaderVisible = true;

  constructor(
    private whatsappService: WhatsAppService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Define um threshold mínimo antes de começar a esconder
    if (scrollTop < 50) {
      this.isHeaderVisible = true;
      this.isScrolled = false;
    } else {
      this.isScrolled = true;
      
      // Esconde o header quando scrolla para baixo, mostra quando scrolla para cima
      if (scrollTop > this.lastScrollTop && scrollTop > 100) {
        // Scrolling down
        this.isHeaderVisible = false;
      } else {
        // Scrolling up
        this.isHeaderVisible = true;
      }
    }
    
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }

  ngOnDestroy(): void {
    // Cleanup se necessário
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  navigateToHome(): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    this.closeMenu();
  }

  openWhatsApp(): void {
    this.whatsappService.openWhatsApp();
    this.closeMenu();
  }
}
