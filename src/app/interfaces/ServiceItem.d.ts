export interface ServiceItem{
  id: number;
  name: string;
  description: string;
  img_url: string;
  price: number;
  selected: boolean;
}

export interface WebServiceItem extends ServiceItem{
  pages: number;
  languages: number;
}
