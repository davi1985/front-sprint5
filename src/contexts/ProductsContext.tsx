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
      .then((response) => {
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
  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ProductsContext.Provider value={{ products, filters }}>
      {children}
    </ProductsContext.Provider>
  );
}
