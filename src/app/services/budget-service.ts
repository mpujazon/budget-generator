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

  calculateTotals(items: ServiceItem[]): number{
    const COST_PER_PAGE = 30;
    const COST_PER_LANG = 30;

    return items.reduce((acc, item) => {
      const numPages = item.options?.pages ?? 0;
      const numLanguages = item.options?.languages ?? 0;

      if (item.selected) {
        let serviceTotal = item.price;

        if (item.options) {
          serviceTotal += (numPages * COST_PER_PAGE);
          serviceTotal += (numLanguages * COST_PER_LANG);
        }

        return acc + serviceTotal;
      }
      return acc;
    }, 0);
  }

  saveBudget(selectedServices: ServiceItem[], customerData: CustomerData, totalPrice: number){
    const newBudget: Budget = {
      id: uuidv4(),
      customer: customerData,
      items: selectedServices,
      date: new Date().toISOString(),
      totals: totalPrice
    }

    try {
      const savedBudgets = this.getSavedBudgets();
      localStorage.setItem("savedBudgets", JSON.stringify([...savedBudgets, newBudget]));
    }catch (e) {
      console.error('Error saving to local storage.')
    }
  }

  getSavedBudgets(): Budget[]{
    const savedBudgets = localStorage.getItem("savedBudgets");
    return JSON.parse(savedBudgets? savedBudgets : "[]");
  }
}
