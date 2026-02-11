import {Component, input} from '@angular/core';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {ServiceItem} from '../../interfaces/ServiceItem';

@Component({
  selector: 'app-service-card',
  imports: [
    Card,
    Button
  ],
  templateUrl: './service-card.html'
})
export class ServiceCard {
  service = input.required<ServiceItem>();
}
