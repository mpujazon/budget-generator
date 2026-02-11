import {Component, input} from '@angular/core';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {ServiceItem} from '../../interfaces/ServiceItem';
import {InputNumber} from 'primeng/inputnumber';

@Component({
  selector: 'app-service-card',
  imports: [
    Card,
    Button,
    InputNumber
  ],
  templateUrl: './service-card.html'
})
export class ServiceCard {
  service = input.required<ServiceItem>();
  protected readonly alert = alert;

  onAddService(){
    this.service().selected = !this.service().selected;
  }
}
