import {Component, input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Budget} from '../../interfaces/Budget';
import {BudgetSummaryTable} from '../budget-summary-table/budget-summary-table';

@Component({
  selector: 'app-summary-budget-view',
  imports: [
    BudgetSummaryTable
  ],
  templateUrl: './summary-budget-view.html'
})
export class SummaryBudgetView {
  budget = input.required<Budget>();
}
