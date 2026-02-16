import {Component, signal} from '@angular/core';
import {ServiceCard} from '../../components/service-card/service-card';
import {ServiceItem, ServiceUpdates} from '../../interfaces/ServiceItem';

@Component({
  selector: 'app-budget-customizer-page',
  imports: [
    ServiceCard
  ],
  templateUrl: './service-selector-page.component.html'
})
export class ServiceSelectorPage {
  totalPrice = signal<number>(0);
  // Temporal Data Provider:
  servicesList: ServiceItem[] = [
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

  printOutput(updates: ServiceUpdates) : void {

    console.log(updates)
  }
}


