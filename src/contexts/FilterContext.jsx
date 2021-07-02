import { createContext, useState } from 'react';
import { useProducts } from '../hooks/useProducts';

export const FilterContext = createContext([]);

export function FilterProvider({ children }) {
  const [searchProduct, setSeachProduct] = useState('');
  const { products } = useProducts();

  const productsFiltered = products.filter((item) => {
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
