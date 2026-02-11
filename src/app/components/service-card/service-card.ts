import { Component } from '@angular/core';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-service-card',
  imports: [
    Card,
    Button
  ],
  templateUrl: './service-card.html'
})
export class ServiceCard {
}
