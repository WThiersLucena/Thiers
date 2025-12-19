import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsService, Solution } from '../../services/solutions.service';

@Component({
  selector: 'app-solutions',
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent implements OnInit {
  solutions: Solution[] = [];

  constructor(private solutionsService: SolutionsService) {}

  ngOnInit(): void {
    this.solutions = this.solutionsService.getSolutions();
  }

  openSolution(solution: Solution): void {
    this.solutionsService.openModal(solution);
  }
}
