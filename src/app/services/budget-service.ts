import {Injectable} from '@angular/core';
import {ServiceItem} from '../interfaces/ServiceItem';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
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
}
