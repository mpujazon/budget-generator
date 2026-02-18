import {Component, inject, OnInit} from '@angular/core';
import {Budget} from '../../interfaces/Budget';
import {BudgetService} from '../../services/budget-service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-budget-history',
  imports: [
    DatePipe
  ],
  templateUrl: './budget-history.html'
})
export class BudgetHistory implements OnInit{
  budgets: Budget[] = [];

  private budgetService = inject(BudgetService);

  ngOnInit() {
    this.budgets = this.budgetService.getSavedBudgets()
  }

  protected readonly navigator = navigator;
  protected readonly Date = Date;
}

