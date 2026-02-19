import {Component, inject, signal} from '@angular/core';
import {ServiceCard} from '../../components/service-card/service-card';
import {ServiceUpdates} from '../../interfaces/ServiceItem';
import {BudgetService} from '../../services/budget-service';
import {BudgetRequestForm} from '../../components/budget-request-form/budget-request-form';
import {CustomerData} from '../../interfaces/CustomerData';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {Button} from '../../components/atoms/button/button';

@Component({
  selector: 'app-service-selector-page',
  imports: [
    ServiceCard,
    BudgetRequestForm,
    DialogModule,
    ButtonModule,
    Button
  ],
  templateUrl: './service-selector-page.html'
})
export class ServiceSelectorPage {
  constructor(private router: Router) {}
  totalPrice = signal<number>(0);
  budgetService = inject(BudgetService);
  showRequestModal = signal<boolean>(false);

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
    this.showRequestModal.set(false);
    if (savedBudget && savedBudget.id) {
      this.router.navigate(['/budget', savedBudget.id]);
    } else {
      console.error("Error 404: This budget it is unavailable.");
    }
  }

  openRequestModal() {
    this.showRequestModal.set(true);
  }
}


