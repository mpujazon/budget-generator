import {Component, input} from '@angular/core';
import {CustomerData} from '../../interfaces/CustomerData';

@Component({
  selector: 'app-customer-details-card',
  imports: [],
  templateUrl: './customer-details-card.html'
})
export class CustomerDetailsCard {
  customer = input.required<CustomerData>();
}
