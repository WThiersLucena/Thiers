import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsService, Solution } from '../../services/solutions.service';
import { WhatsAppService } from '../../services/whatsapp.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-solution-modal',
  imports: [CommonModule],
  templateUrl: './solution-modal.component.html',
  styleUrl: './solution-modal.component.css'
})
export class SolutionModalComponent implements OnInit, OnDestroy {
  isOpen = false;
  selectedSolution: Solution | null = null;
  currentCarouselIndex = 0;
  private subscriptions = new Subscription();

  constructor(
    private solutionsService: SolutionsService,
    private whatsappService: WhatsAppService
  ) {}

  ngOnInit(): void {
    const solutionSub = this.solutionsService.getSelectedSolution().subscribe(
      solution => {
        this.selectedSolution = solution;
        this.currentCarouselIndex = 0; // Reset carousel quando muda a solução
      }
    );
    
    const modalSub = this.solutionsService.getIsModalOpen().subscribe(
      isOpen => this.isOpen = isOpen
    );

    this.subscriptions.add(solutionSub);
    this.subscriptions.add(modalSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  closeModal(): void {
    this.solutionsService.closeModal();
  }

  onOverlayClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  openWhatsApp(): void {
    this.whatsappService.openWhatsApp();
    this.closeModal();
  }

  nextSlide(): void {
    if (this.selectedSolution?.saasCards) {
      this.currentCarouselIndex = (this.currentCarouselIndex + 1) % this.selectedSolution.saasCards.length;
    }
  }

  prevSlide(): void {
    if (this.selectedSolution?.saasCards) {
      this.currentCarouselIndex = this.currentCarouselIndex === 0 
        ? (this.selectedSolution.saasCards.length - 1)
        : (this.currentCarouselIndex - 1);
    }
  }

  goToSlide(index: number): void {
    this.currentCarouselIndex = index;
  }
}
