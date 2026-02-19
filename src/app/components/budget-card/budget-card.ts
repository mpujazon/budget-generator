import {Component, input} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Budget} from '../../interfaces/Budget';

@Component({
  selector: 'app-budget-card',
  imports: [
    DatePipe
  ],
  templateUrl: './budget-card.html'
})
export class BudgetCard {
  budget = input.required<Budget>();
}
