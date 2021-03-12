interface Attributes {
  [key: string]: string[];
}
export interface ISearchFilters {
  attributes: Attributes;
  pageSize: number;
  sortBy: string;
  priceLte: number;
  priceGte: number;
  price: string;
}
