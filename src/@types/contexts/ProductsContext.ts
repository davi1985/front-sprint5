import { ReactNode } from 'react';

import { Filter } from '../components/Filter';
import { ProductType } from '../components/Product';

export type ProductsProviderProps = {
  children: ReactNode;
};

export type ProductsContextData = {
  products: Array<ProductType>;
  filters: Array<Filter>;
  handleSortByName: () => void;
  handleSortByPrice: () => void;
  handleSortBySize: () => void;
};
