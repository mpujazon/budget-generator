import {Component, inject, signal} from '@angular/core';
import {ServiceCard} from '../../components/service-card/service-card';
import {ServiceItem, ServiceUpdates} from '../../interfaces/ServiceItem';
import {BudgetService} from '../../services/budget-service';

@Component({
  selector: 'app-budget-customizer-page',
  imports: [
    ServiceCard
  ],
  templateUrl: './service-selector-page.component.html'
})
export class ServiceSelectorPage {
  totalPrice = signal<number>(0);
  budgetService = inject(BudgetService);

  // Temporal Data Provider:
  servicesList = this.budgetService.getWebServices();

  updateServiceOptions(updates: ServiceUpdates) : void {
    let serviceItem = this.servicesList.find((service)=> service.id === updates.id);
    if (serviceItem === undefined) return;

    if (updates.selected) {
      serviceItem.selected = updates.selected;
    }

    if (updates.pages && serviceItem.options?.pages) {
      serviceItem.options.pages = updates.pages;
    }

    if (updates.languages && serviceItem.options?.languages) {
      serviceItem.options.languages = updates.languages;
    }
    this.totalPrice.set(this.budgetService.calculateTotals(this.servicesList));
  }
}


