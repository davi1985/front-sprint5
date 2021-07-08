import { createContext, useState } from 'react';

import { ProductType } from '../@types/components/Product';
import {
  FilterContextData,
  FilterProviderProps,
} from '../@types/contexts/FilterContext';
import { useProducts } from '../hooks/useProducts';

export const FilterContext = createContext<FilterContextData>(
  {} as FilterContextData,
);

export function FilterProvider({ children }: FilterProviderProps) {
  const [searchProduct, setSeachProduct] = useState('');
  const { products } = useProducts();

  const productsFiltered = products.filter((item: ProductType) => {
    if (searchProduct === '') return false;

    const description = item.name.toUpperCase();
    const search = searchProduct.toUpperCase();

    return description.includes(search);
  });

  return (
    <FilterContext.Provider
      value={{ searchProduct, setSeachProduct, productsFiltered }}
    >
      {children}
    </FilterContext.Provider>
  );
}
