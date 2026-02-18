import {Injectable} from '@angular/core';
import {ServiceItem, ServiceUpdates} from '../interfaces/ServiceItem';
import { v4 as uuidv4 } from 'uuid';
import {CustomerData} from '../interfaces/CustomerData';
import {Budget} from '../interfaces/Budget';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  getWebServices(): ServiceItem[]{
    return [
      {
        id: 1,
        name: "SEO",
        description: "Search engine optimization to boost organic visibility and attract high-quality traffic.",
        imgUrl: "/services/seo.webp",
        price: 300,
        selected: false
      },
      {
        id: 2,
        name: "Ads",
        description: "Strategic paid advertising campaigns designed to maximize ROI and drive immediate conversions.",
        imgUrl: "/services/ads.webp",
        price: 400,
        selected: false
      },
      {
        id: 3,
        name: "Web",
        description: "Custom responsive web development focused on high performance and seamless user experience.",
        imgUrl: "/services/web.webp",
        price: 500,
        selected: false,
        options:{
          pages: 1,
          languages: 1
        }
      }
    ];
  }

  updateServiceOptions(service: ServiceItem, updates: ServiceUpdates): ServiceItem{
    if (updates.selected) {
      service.selected = updates.selected;
    }

    if (updates.pages && service.options?.pages) {
      service.options.pages = updates.pages;
    }

    if (updates.languages && service.options?.languages) {
      service.options.languages = updates.languages;
    }
    return service;
  }

  calculateSubtotal(item: ServiceItem): number{
    if (!item) return 0;

    const COST_PER_PAGE = 30;
    const COST_PER_LANG = 30;

    const numPages = item.options?.pages ?? 0;
    const numLanguages = item.options?.languages ?? 0;

    return item.price + (numPages*COST_PER_PAGE + numLanguages*COST_PER_LANG);
  }

  calculateTotals(items: ServiceItem[]): number{
    return items.reduce((acc, item) => {
      if (item.selected) {
        let serviceTotal = item.price;

        if (item.options) {
          serviceTotal += this.calculateSubtotal(item);
        }
        return acc + serviceTotal;
      }
      return acc;
    }, 0);
  }

  saveBudget(selectedServices: ServiceItem[], customerData: CustomerData, totalPrice: number): Budget | null{
    const creationDate = new Date();
    const expirationDate = new Date();
    expirationDate.setDate(creationDate.getDate() + 15);
    const serviceWithOptions = selectedServices.find((item)=> item.options !== undefined) as ServiceItem;
    const optionsSubtotal = this.calculateSubtotal(serviceWithOptions);

    const newBudget: Budget = {
      id: uuidv4(),
      customer: customerData,
      items: selectedServices,
      date: creationDate.toISOString(),
      expirationDate: expirationDate.toISOString(),
      webServiceSubtotal: optionsSubtotal,
      totals: totalPrice
    }

    try {
      const savedBudgets = this.getSavedBudgets();
      localStorage.setItem("savedBudgets", JSON.stringify([...savedBudgets, newBudget]));
      return newBudget;
    }catch (e) {
      console.error('Error saving to local storage.')
      return null;
    }
  }

  getSavedBudgets(): Budget[]{
    const savedBudgets = localStorage.getItem("savedBudgets");
    return JSON.parse(savedBudgets? savedBudgets : "[]");
  }
}
