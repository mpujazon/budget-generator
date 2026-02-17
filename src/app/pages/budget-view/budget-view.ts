import {Component, signal} from '@angular/core';
import {Budget} from '../../interfaces/Budget';

@Component({
  selector: 'app-budget-view',
  imports: [],
  templateUrl: './budget-view.html'
})

export class BudgetView {
  providedBudget: Budget = {
    "id": "cf1237de-cc5d-4d68-a863-2e28bbcbdee4",
    "customer": {
      "name": "Miguel Pujazón Cárdenas",
      "phone": "+34607738761",
      "email": "mpujazoncardenas@gmail.com"
    },
    "items": [
      {
        "id": 2,
        "name": "Ads",
        "description": "Strategic paid advertising campaigns designed to maximize ROI and drive immediate conversions.",
        "imgUrl": "/services/ads.webp",
        "price": 400,
        "selected": true
      },
      {
        "id": 3,
        "name": "Web",
        "description": "Custom responsive web development focused on high performance and seamless user experience.",
        "imgUrl": "/services/web.webp",
        "price": 500,
        "selected": true,
        "options": {
          "pages": 1,
          "languages": 6
        }
      }
    ],
    "date": "2026-02-17T09:34:56.616Z",
    "expiration_date": "2026-03-05T09:34:56.616Z",
    "totals": 1110
  }

  budget = {
    ...this.providedBudget,
    "date": new Date(this.providedBudget.date),
    "expiration_date": new Date(this.providedBudget.expiration_date)
  }
}
