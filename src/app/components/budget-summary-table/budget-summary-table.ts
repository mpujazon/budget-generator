import {Component, input} from '@angular/core';
import {Budget} from '../../interfaces/Budget';

@Component({
  selector: 'app-budget-summary-table',
  imports: [],
  templateUrl: './budget-summary-table.html'
})
export class BudgetSummaryTable {
  budget = input.required<Budget>();
}
