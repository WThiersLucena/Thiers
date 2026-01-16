import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  stats = [
    { value: '+100', label: 'Colaboradores' },
    { value: '+20', label: 'Clientes Ativos' },
    { value: '+75', label: 'Projetos' },
    { value: '+5', label: 'Anos no Mercado' },
    { value: '+10620', label: 'Horas Trabalhadas' },
  ];
}
