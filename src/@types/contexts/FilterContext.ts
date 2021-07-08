import { ReactNode } from 'react';

import { ProductType } from '../components/Product';

export type FilterContextData = {
  searchProduct: string;
  setSeachProduct: (string: string) => void;
  productsFiltered: Array<ProductType>;
};

export type FilterProviderProps = {
  children: ReactNode;
};
