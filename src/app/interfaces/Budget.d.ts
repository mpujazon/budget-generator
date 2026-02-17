import {CustomerData} from './CustomerData';
import {ServiceItem} from './ServiceItem';

export interface Budget{
  id: string;
  customer: CustomerData;
  items: ServiceItem[];
  date: string;
  totals: number;
}
