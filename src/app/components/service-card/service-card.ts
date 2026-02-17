import {Component, input, output} from '@angular/core';
import {ServiceItem, ServiceUpdates} from '../../interfaces/ServiceItem';
import {InputNumberModule} from 'primeng/inputnumber';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-service-card',
  imports: [InputNumberModule, FormsModule],
  templateUrl: './service-card.html'
})
export class ServiceCard {
  service = input.required<ServiceItem>();
  onUpdateService = output<ServiceUpdates>();

  addService() {
    this.service().selected = !this.service().selected;
    const updateServiceItem = {
      id: this.service().id,
      selected: this.service().selected
    }
    this.onUpdateService.emit(updateServiceItem);
  }

  updatePages(value: number | null) {
    const updateServiceItem = {
      id: this.service().id,
      pages: value ?? 1
    }
    this.onUpdateService.emit(updateServiceItem);
  }

  updateLanguages(value: number | null) {
    const updateServiceItem = {
      id: this.service().id,
      languages: value ?? 1
    }
    this.onUpdateService.emit(updateServiceItem);
  }
}
