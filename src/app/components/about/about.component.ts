import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  stats = [
    { value: '+500', label: 'Colaboradores' },
    { value: '+50', label: 'Clientes Ativos' },
    { value: '+600', label: 'Projetos' },
    { value: '+10', label: 'Anos no Mercado' },
    { value: '+72420', label: 'Horas Trabalhadas' }
  ];
}
