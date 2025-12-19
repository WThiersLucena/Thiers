import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Morgana',
      company: 'MOA Brand',
      text: 'Tinha apenas uma loja física e anunciava nas redes sociais. Quando adquiri o SaaS de Ecommerce da Thiers, tudo mudou. Ganhei uma visibilidade muito maior, consegui um controle de estoque eficiente e uma gestão completa do negócio que eu nem imaginava ser possível. Hoje consigo gerenciar vendas, estoque e clientes de forma integrada, tudo em um só lugar.'
    },
    {
      name: 'Ricardo Silva',
      company: 'TechFlow Solutions',
      text: 'Nossa empresa estava estagnada há anos, operando com métodos antigos que não acompanhavam o mercado. Após a consultoria da Thiers, tivemos uma transformação completa. Estruturaram nossos processos, implementaram metodologias modernas e nos mostraram um caminho claro para o crescimento. A evolução foi drástica: de uma empresa que não evoluía, nos tornamos uma organização ágil e competitiva.'
    }
  ];
}
