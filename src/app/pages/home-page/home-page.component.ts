import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SolutionsComponent } from '../../components/solutions/solutions.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SolutionModalComponent } from '../../components/solution-modal/solution-modal.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    SolutionsComponent,
    TestimonialsComponent,
    NewsletterComponent,
    FooterComponent,
    SolutionModalComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
