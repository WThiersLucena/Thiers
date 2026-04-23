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
    { value: '+20', label: 'Colaboradores' },
    { value: '+11', label: 'Clientes Ativos' },
    { value: '+23', label: 'Projetos' },
    { value: '+6', label: 'Anos no Mercado' },
    { value: '+9500', label: 'Horas Trabalhadas' },
  ];
}
