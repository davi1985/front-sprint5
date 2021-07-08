/* eslint-disable prettier/prettier */
import { createContext, useEffect, useState } from 'react';

import { fetchData } from '../service/ServiceUtils';
import { useAlert } from '../hooks/useAlert';
import { useLoading } from '../hooks/useLoading';
import { ProductsContextData, ProductsProviderProps } from '../@types/contexts/ProductsContext';
import { ProductType } from '../@types/components/Product';
import { Filter } from '../@types/components/Filter';



export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData,
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filters, setFilters] = useState<Filter[]>([{} as Filter]);

  const { alert } = useAlert();
  const { addRequest, removeRequest } = useLoading();

  async function get(): Promise<void> {
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

  function handleSortByName(): void {
    const sortedProducts = [...products];

    sortedProducts.sort((actual, next) =>
      // eslint-disable-next-line no-nested-ternary
      actual.name > next.name ? 1 : next.name > actual.name ? -1 : 0,
    );

    setProducts(sortedProducts);
  }

  function handleSortByPrice(): void {
    const sortedProducts = [...products];

    sortedProducts.sort((actual, next) => {
      const actualPrice = parseFloat(actual.price);
      const nextPrice = parseFloat(next.price)
      // eslint-disable-next-line no-nested-ternary
      return actualPrice > nextPrice ? 1 : nextPrice > actualPrice ? -1 : 0
    });

    setProducts(sortedProducts)
  }

  function handleSortBySize(): void {
    const sortedProducts = [...products]

    sortedProducts.sort((actual, next) => {
      const sizeActual = Number(actual.name.match(/\d+/))
      const sizeNext = Number(next.name.match(/\d+/))

      // eslint-disable-next-line no-nested-ternary
      return sizeActual > sizeNext ? 1 : sizeNext > sizeActual ? -1 : 0
    })

    setProducts(sortedProducts)
  }

  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductsContext.Provider value={{ products, filters, handleSortByName, handleSortByPrice, handleSortBySize }}>
      {children}
    </ProductsContext.Provider>
  );
}
