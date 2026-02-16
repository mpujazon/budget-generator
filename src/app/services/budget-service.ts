import {Injectable} from '@angular/core';
import {ServiceItem} from '../interfaces/ServiceItem';

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
