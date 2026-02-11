import { Component } from '@angular/core';
import {ServiceCard} from '../../components/service-card/service-card';

@Component({
  selector: 'app-budget-customizer-page',
  imports: [
    ServiceCard
  ],
  templateUrl: './budget-customizer-page.html'
})
export class BudgetCustomizerPage {
}
