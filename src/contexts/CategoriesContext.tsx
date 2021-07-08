import { createContext, useEffect, useState } from 'react';

import { Breadcrumb } from '../@types/components/Breadcrumb';
import { MenuItemType } from '../@types/components/Menu';
import {
  CategoriesContextData,
  CategoriesProviderProps,
} from '../@types/contexts/CategoriesContext';
import { useAlert } from '../hooks/useAlert';
import { useLoading } from '../hooks/useLoading';
import { fetchData } from '../service/ServiceUtils';

export const CategoriesContext = createContext({} as CategoriesContextData);

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([
    {} as Breadcrumb,
  ]);

  const { alert } = useAlert();

  const { addRequest, removeRequest } = useLoading();

  async function get(): Promise<void> {
    addRequest();

    await fetchData('categories')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any): void => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CategoriesContext.Provider value={{ menuItems, breadcrumbs, alert }}>
      {children}
    </CategoriesContext.Provider>
  );
}
