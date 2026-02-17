import {Component, inject, signal} from '@angular/core';
import {ServiceCard} from '../../components/service-card/service-card';
import {ServiceUpdates} from '../../interfaces/ServiceItem';
import {BudgetService} from '../../services/budget-service';
import {BudgetRequestForm} from '../../components/budget-request-form/budget-request-form';
import {CustomerData} from '../../interfaces/CustomerData';

@Component({
  selector: 'app-service-selector-page',
  imports: [
    ServiceCard,
    BudgetRequestForm
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
    if(serviceItem === undefined) return;

    serviceItem = this.budgetService.updateServiceOptions(serviceItem, updates);
    this.totalPrice.set(this.budgetService.calculateTotals(this.servicesList));
  }

  saveBudget(customerData: CustomerData){
    const selectedServices = this.servicesList.filter(service => service.selected)
    const savedBudget = this.budgetService.saveBudget(selectedServices, customerData, this.totalPrice());
  }
}


