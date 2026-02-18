import {CustomerData} from './CustomerData';
import {ServiceItem} from './ServiceItem';

export interface Budget{
  id: string;
  customer: CustomerData;
  items: ServiceItem[];
  date: string;
  expiration_date: string;
  totals: number;
}

export interface newIBudget{
  id: string;
  customer: CustomerData;
  items: ServiceItem[];
  date: string;
  expiration_date: string;
  totals: number;
}
