import {Component, input} from '@angular/core';
import {ServiceItem} from '../../interfaces/ServiceItem';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html'
})
export class ServiceCard {
  service = input.required<ServiceItem>();
  protected readonly alert = alert;

  onAddService(){
    this.service().selected = !this.service().selected;
  }
}
