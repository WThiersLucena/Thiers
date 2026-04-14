import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SolutionsPageComponent } from './pages/solutions-page/solutions-page.component';
import { SolutionsShellComponent } from './pages/solutions-shell/solutions-shell.component';
import { SalonBeautySolutionPageComponent } from './pages/salon-beauty-solution-page/salon-beauty-solution-page.component';
import { PetSolutionPageComponent } from './pages/pet-solution-page/pet-solution-page.component';
import { LandingSolutionPageComponent } from './pages/landing-solution-page/landing-solution-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'sobre',
    component: AboutPageComponent,
  },
  {
    path: 'solucoes',
    component: SolutionsShellComponent,
    children: [
      { path: '', component: SolutionsPageComponent },
      {
        path: 'sistema-salao-beleza',
        component: SalonBeautySolutionPageComponent,
      },
      {
        path: 'sistema-pet',
        component: PetSolutionPageComponent,
      },
      {
        path: 'landing-pages-sob-medida',
        component: LandingSolutionPageComponent,
      },
    ],
  },
];
