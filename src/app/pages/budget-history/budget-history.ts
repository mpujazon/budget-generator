import {Component, inject, OnInit} from '@angular/core';
import {Budget} from '../../interfaces/Budget';
import {BudgetService} from '../../services/budget-service';

@Component({
  selector: 'app-budget-history',
  imports: [],
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

