import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {BudgetCustomizerPage} from './pages/budget-customizer-page/budget-customizer-page';

export const routes: Routes = [
  {
    path:"",
    component: HomePage
  },
  {
    path:"budget/new",
    component: BudgetCustomizerPage
  },
  {
    path:"**",
    redirectTo:""
  }
];
