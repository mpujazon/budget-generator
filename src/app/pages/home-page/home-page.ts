import { Component } from '@angular/core';
import {Button} from '../../components/atoms/button/button';
import {routes} from '../../app.routes';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [
    Button,
    RouterLink
  ],
  templateUrl: './home-page.html'
})
export class HomePage {

  protected readonly routes = routes;
}
