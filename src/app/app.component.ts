import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { SolutionModalComponent } from './components/solution-modal/solution-modal.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    SolutionsComponent,
    TestimonialsComponent,
    NewsletterComponent,
    FooterComponent,
    SolutionModalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Thiers';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // O tema já é inicializado no ThemeService, mas garantimos que está aplicado
    this.themeService.getCurrentTheme();
  }
}
