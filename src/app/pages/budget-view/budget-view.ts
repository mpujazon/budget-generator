import {Component, DOCUMENT, inject, OnInit} from '@angular/core';
import {Budget} from '../../interfaces/Budget';
import { ActivatedRoute } from '@angular/router';
import {BudgetService} from '../../services/budget-service';
import { Clipboard } from '@angular/cdk/clipboard'

@Component({
  selector: 'app-budget-view',
  imports: [],
  templateUrl: './budget-view.html'
})

export class BudgetView implements OnInit {
  budgetId: string | null = null;
  providedBudget?: Budget;
  budget: any;

  private document = inject(DOCUMENT);
  private budgetService = inject(BudgetService);
  constructor(
    private route: ActivatedRoute,
    private clipboard: Clipboard
    ) {}

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.paramMap.get('id');

    this.providedBudget = this.budgetService
      .getSavedBudgets()
      .find(budget => budget.id === this.budgetId);

    if (this.providedBudget) {
      this.budget = {
        ...this.providedBudget,
        date: new Date(this.providedBudget.date),
        expiration_date: new Date(this.providedBudget.expirationDate)
      };
    }
  }

  copyURL(){
    this.clipboard.copy(document.location.href)
  }
  printPDF(){
    window.print();
  }
}
