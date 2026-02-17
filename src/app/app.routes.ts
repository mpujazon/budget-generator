import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {ServiceSelectorPage} from './pages/budget-customizer-page/service-selector-page.component';

export const routes: Routes = [
  {
    path:"",
    component: HomePage
  },
  {
    path:"budget/new",
    component: ServiceSelectorPage
  },
  {
    path:"**",
    redirectTo:""
  }
];
