import { Component } from '@angular/core';
import {ServiceCard} from '../../components/service-card/service-card';
import {ServiceItem, WebServiceItem} from '../../interfaces/ServiceItem';

@Component({
  selector: 'app-budget-customizer-page',
  imports: [
    ServiceCard
  ],
  templateUrl: './budget-customizer-page.html'
})
export class BudgetCustomizerPage {
  // Temporal Data Provider:
  servicesList: (ServiceItem | WebServiceItem)[] = [
    {
      id: 1,
      name: "SEO",
      description: "Search engine optimization to boost organic visibility and attract high-quality traffic.",
      img_url: "/services/seo.webp",
      price: 300,
      selected: false
    },
    {
      id: 2,
      name: "Ads",
      description: "Strategic paid advertising campaigns designed to maximize ROI and drive immediate conversions.",
      img_url: "/services/ads.webp",
      price: 400,
      selected: false
    },
    {
      id: 3,
      name: "Web",
      description: "Custom responsive web development focused on high performance and seamless user experience.",
      img_url: "/services/web.webp",
      price: 500,
      selected: false,
      pages: 1,
      languages: 3
    }
  ];
}


