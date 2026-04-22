import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { HomeFeaturedSitesComponent } from '../../components/home-featured-sites/home-featured-sites.component';
import { HomePortfolioShowcaseComponent } from '../../components/home-portfolio-showcase/home-portfolio-showcase.component';
import { HomeFinalCtaComponent } from '../../components/home-final-cta/home-final-cta.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    HomeFeaturedSitesComponent,
    HomePortfolioShowcaseComponent,
    TestimonialsComponent,
    HomeFinalCtaComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
