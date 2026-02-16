export interface ServiceItem{
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  selected: boolean;
  options?:WebServiceOptions
}

export interface WebServiceOptions{
  pages?: number;
  languages?: number;
}

export interface ServiceUpdates{
  id: number;
  selected?: boolean;
  pages?: number;
  languages?: number;
}
