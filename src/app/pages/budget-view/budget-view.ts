import {Component, DOCUMENT, inject, OnInit, signal} from '@angular/core';
import {Budget} from '../../interfaces/Budget';
import { ActivatedRoute } from '@angular/router';
import {BudgetService} from '../../services/budget-service';
import { Clipboard } from '@angular/cdk/clipboard'
import {DatePipe} from '@angular/common';
import {Button} from '../../components/atoms/button/button';
import {CustomerDetailsCard} from '../../components/customer-details-card/customer-details-card';
import {PaymentTerms} from '../../components/payment-terms/payment-terms';
import {HelpCard} from '../../components/help-card/help-card';
import {SummaryBudgetView} from '../../components/summary-budget-view/summary-budget-view';

@Component({
  selector: 'app-budget-view',
  imports: [
    DatePipe,
    Button,
    CustomerDetailsCard,
    PaymentTerms,
    HelpCard,
    SummaryBudgetView
  ],
  templateUrl: './budget-view.html'
})

export class BudgetView implements OnInit {
  budgetId: string | null = null;
  providedBudget?: Budget;
  budget: any;
  urlCopied = signal(false);

  private document = inject(DOCUMENT);
  private clipboard = inject(Clipboard);
  private budgetService = inject(BudgetService);
  constructor(
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.budgetId = this.route.snapshot.paramMap.get('id');

    const result = this.budgetService
      .getSavedBudgets()
      .find(budget => budget.id === this.budgetId);

    if(result !== undefined){
      this.budget = result;
    }
  }

  copyURL(){
    this.clipboard.copy(document.location.href);
    this.urlCopied.set(true);
    setTimeout(() => {
      this.urlCopied.set(false);
    }, 2000);
  }
  printPDF(){
    window.print();
  }
}
