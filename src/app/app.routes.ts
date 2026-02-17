import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {ServiceSelectorPage} from './pages/service-selector-page/service-selector-page.component';
import {BudgetView} from './pages/budget-view/budget-view';

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
    path:"budget/:id",
    component: BudgetView
  },
  {
    path:"**",
    redirectTo:""
  }
];
