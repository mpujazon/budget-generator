import {Component, input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Budget} from '../../interfaces/Budget';

@Component({
  selector: 'app-summary-budget-view',
  imports: [
  ],
  templateUrl: './summary-budget-view.html'
})
export class SummaryBudgetView {
  budget = input.required<Budget>();
}
