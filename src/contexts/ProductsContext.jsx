import { createContext, useEffect, useState } from 'react';

import { fetchData } from '../service/ServiceUtils';
import { useAlert } from '../hooks/useAlert';
import { useLoading } from '../hooks/useLoading';

export const ProductsContext = createContext([]);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState([{}]);

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
  }, []);

  return (
    <ProductsContext.Provider value={{ products, filters }}>
      {children}
    </ProductsContext.Provider>
  );
}
