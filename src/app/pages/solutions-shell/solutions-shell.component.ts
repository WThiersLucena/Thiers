import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/** Shell apenas para expor rotas filhas em `/solucoes/*`. */
@Component({
  selector: 'app-solutions-shell',
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class SolutionsShellComponent {}
