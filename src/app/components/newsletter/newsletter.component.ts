import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent {
  email = '';
  submitted = false;

  onSubmit(): void {
    if (this.email && this.isValidEmail(this.email)) {
      // Aqui você pode adicionar a lógica para enviar o email
      console.log('Email cadastrado:', this.email);
      this.submitted = true;
      this.email = '';
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
