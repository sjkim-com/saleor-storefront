interface SortOptions {
  value?: string;
  label: string;
}

// interface ActiveFiltersAttribute {
//   attributeSlug: string;
//   valueSlug: string;
//   valueName: string;
// }

interface ActiveFiltersAttribute {
  attributeId: string;
  attributeValue: string;
  valueName: string;
}

export interface IProps {
  activeSortOption?: string;
  activePriceOption?: string;
  activeFilters: number;
  activeFiltersAttributes: ActiveFiltersAttribute[];
  numberOfProducts: number;
  sortOptions: SortOptions[];
  priceOptions: SortOptions[];
  onChange: (order: { value?: string; label: string }, tag: string) => void;
  onCloseFilterAttribute: (attributeSlug: string, valueSlug: string) => void;
  openFiltersMenu: () => void;
  clearFilters: () => void;
}
