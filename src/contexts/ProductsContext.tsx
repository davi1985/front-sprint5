/* eslint-disable prettier/prettier */
import { createContext, ReactNode, useEffect, useState } from 'react';

import { fetchData } from '../service/ServiceUtils';
import { useAlert } from '../hooks/useAlert';
import { useLoading } from '../hooks/useLoading';
import { ProductType } from '../components/Product';

type Filter = {
  id: string;
  label: string;
};

type ProductsContextData = {
  products: Array<ProductType>;
  filters: Array<Filter>;
  handleSortByName: () => void;
  handleSortByPrice: () => void;
};

type ProductsProviderProps = {
  children: ReactNode;
};

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData,
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Array<ProductType>>([]);
  const [filters, setFilters] = useState<Array<Filter>>([{} as Filter]);

  const { alert } = useAlert();
  const { addRequest, removeRequest } = useLoading();

  async function get() {
    addRequest();

    await fetchData('products')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => {
        const prevProducts = response.slice(0, response.length - 1);
        const prevFilters = response.slice(
          response.length - 1,
          response.length,
        );

        setProducts(prevProducts);

        setFilters(prevFilters[0].filters);

        alert('Produtos carregados com sucesso!', true);
      })
      .catch(() => {
        alert('Erro ao carregar os produtos!', false);

        removeRequest();
      });
  }

  function handleSortByName() {
    const sortedProducts = [...products];

    sortedProducts.sort((actual, next) =>
      // eslint-disable-next-line no-nested-ternary
      actual.name > next.name ? 1 : next.name > actual.name ? -1 : 0,
    );
    setProducts(sortedProducts);
  }

  function handleSortByPrice() {
    const sortedProducts = [...products];
    sortedProducts.sort((actual, next) =>
      // eslint-disable-next-line no-nested-ternary
      parseFloat(actual.price) > parseFloat(next.price)
        ? 1
        : parseFloat(next.price) > parseFloat(actual.price)
          ? -1
          : 0,
    );

    setProducts(sortedProducts)
  }

  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <ProductsContext.Provider value={{ products, filters, handleSortByName, handleSortByPrice }}>
      {children}
    </ProductsContext.Provider>
  );
}
