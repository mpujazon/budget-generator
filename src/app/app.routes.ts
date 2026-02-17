import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {ServiceSelectorPage} from './pages/service-selector-page/service-selector-page';
import {BudgetView} from './pages/budget-view/budget-view';
import {BudgetHistory} from './pages/budget-history/budget-history';

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
    path:"budget/history",
    component: BudgetHistory
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
