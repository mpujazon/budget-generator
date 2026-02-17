import {Component, inject, OnInit} from '@angular/core';
import {Budget} from '../../interfaces/Budget';
import { ActivatedRoute } from '@angular/router';
import {BudgetService} from '../../services/budget-service';

@Component({
  selector: 'app-budget-view',
  imports: [],
  templateUrl: './budget-view.html'
})

export class BudgetView implements OnInit {
  budgetId: string | null = null;
  providedBudget?: Budget;
  budget: any;

  private budgetService = inject(BudgetService);
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.paramMap.get('id');

    this.providedBudget = this.budgetService
      .getSavedBudgets()
      .find(budget => budget.id === this.budgetId);

    if (this.providedBudget) {
      this.budget = {
        ...this.providedBudget,
        date: new Date(this.providedBudget.date),
        expiration_date: new Date(this.providedBudget.expiration_date)
      };
    }
  }
}
