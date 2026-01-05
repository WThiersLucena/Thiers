import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { SolutionModalComponent } from './components/solution-modal/solution-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SolutionsComponent,
    TestimonialsComponent,
    NewsletterComponent,
    FooterComponent,
    SolutionModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Thiers';

  constructor() {}

  ngOnInit(): void {
    this.showConsoleMessage();
  }

  private showConsoleMessage(): void {
    const styles = [
      'color: #0066cc',
      'font-size: 16px',
      'font-weight: bold',
      'font-family: monospace',
    ].join(';');

    const linkStyle = ['color: #0066cc', 'text-decoration: underline'].join(
      ';'
    );

    console.log(
      '%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'color: #0066cc; font-weight: bold;'
    );
    console.log('%cSite Institucional - Thiers', styles);
    console.log(
      '%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'color: #0066cc; font-weight: bold;'
    );
    console.log('');
    console.log(
      '%cDesenvolvido por: Wanderson Thiers',
      'color: #333; font-size: 14px; font-weight: bold;'
    );
    console.log('');
    console.log(
      '%c📋 Informações do Projeto:',
      'color: #0066cc; font-size: 14px; font-weight: bold;'
    );
    console.log('   • Framework: Angular 19.2.0');
    console.log('   • Linguagem: TypeScript');
    console.log('   • Estilização: CSS3 com variáveis CSS');
    console.log('   • Arquitetura: Component-based Architecture');
    console.log('   • Responsividade: Mobile-first approach');
    console.log('   • Animações: CSS Transitions e Keyframes');
    console.log('   • Modal System: Custom implementation');
    console.log('   • Carrossel: Custom carousel component');
    console.log('');
    console.log(
      '%c💡 Dúvidas ou Sugestões?',
      'color: #0066cc; font-size: 14px; font-weight: bold;'
    );
    console.log('   📞 Telefone: 11-98253-9200');
    console.log(
      '   🔗 LinkedIn: https://www.linkedin.com/in/wanderson-lucena-97413815b/'
    );
    console.log('');
    console.log(
      '%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'color: #0066cc; font-weight: bold;'
    );
  }
}
