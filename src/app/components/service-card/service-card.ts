import {Component, input, output} from '@angular/core';
import {ServiceItem, ServiceUpdates} from '../../interfaces/ServiceItem';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html'
})
export class ServiceCard {
  service = input.required<ServiceItem>();
  onUpdateService = output<ServiceUpdates>();

  addService(event: Event) {
    this.service().selected = !this.service().selected;
    const updateServiceItem = {
      id: this.service().id,
      selected: this.service().selected
    }
    this.onUpdateService.emit(updateServiceItem);
  }

  updateService(event: Event){
    const inputNumber = event.target as HTMLInputElement;
    const propertyName = inputNumber.name;

    if (propertyName !== "pages" && propertyName !== "languages") {
      console.warn("Invalid property name");
      return;
    }
    const updateServiceItem = {
        id: this.service().id,
        [propertyName]: inputNumber.valueAsNumber
      }
    this.onUpdateService.emit(updateServiceItem);
  }
}
