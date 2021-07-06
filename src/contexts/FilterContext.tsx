import { createContext, ReactNode, useState } from 'react';
import { ProductType } from '../components/Product';
import { useProducts } from '../hooks/useProducts';

type FilterContextData = {
  searchProduct: string
  setSeachProduct: (string: string) => void
  productsFiltered: Array<ProductType>
};

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterContext = createContext<FilterContextData>({} as FilterContextData);

export function FilterProvider({ children }: FilterProviderProps) {
  const [searchProduct, setSeachProduct] = useState('');
  const { products } = useProducts();

  const productsFiltered = products.filter((item: ProductType) => {
    if (searchProduct === '') return false;

    const description = item.description.toUpperCase();
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
