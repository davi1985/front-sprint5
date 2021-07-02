import { createContext, useEffect, useState } from 'react';

import { fetchData } from '../service/ServiceUtils';
import { useAlert } from '../hooks/useAlert';
import { useLoading } from '../hooks/useLoading';

export const CategoriesContext = createContext([]);

export function CategoriesProvider({ children }) {
  const [menuItems, setMenuItems] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([{}]);

  const { alert } = useAlert();

  const { addRequest, removeRequest } = useLoading();

  async function get() {
    addRequest();

    await fetchData('categories')
      .then((response) => {
        const menu = response.slice(0, response.length - 1);
        const prevBreadcrumbs = response.slice(
          response.length - 1,
          response.length,
        );

        setMenuItems(menu);
        setBreadcrumbs(prevBreadcrumbs[0].current);

        removeRequest();
      })
      .catch(() => {
        alert('Erro ao carregar as categorias!', false);

        removeRequest();
      });
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <CategoriesContext.Provider value={{ menuItems, breadcrumbs }}>
      {children}
    </CategoriesContext.Provider>
  );
}
