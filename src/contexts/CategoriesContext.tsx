import { createContext, ReactNode, useEffect, useState } from "react";

import { fetchData } from "../service/ServiceUtils";
import { useAlert } from "../hooks/useAlert";
import { useLoading } from "../hooks/useLoading";

type CategoriesProviderProps = {
  children: ReactNode;
};

type CategoriesContextData = {
  menuItems: Array<Menu>;
  breadcrumbs: Array<Breadcrumb>;
  alert: (messaAlert: string, successType: boolean) => void;
};

type Menu = {
  id: number;
  label: string;
  link: string;
};

type Breadcrumb = {
  id: number;
  label: string;
  link: string;
  active: boolean;
};

export const CategoriesContext = createContext({} as CategoriesContextData);

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [menuItems, setMenuItems] = useState<Array<Menu>>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<Array<Breadcrumb>>([
    {} as Breadcrumb,
  ]);

  const { alert } = useAlert();

  const { addRequest, removeRequest } = useLoading();

  async function get(): Promise<void> {
    addRequest();

    await fetchData("categories")
      .then((response: any) => {
        const menu = response.slice(0, response.length - 1);
        const prevBreadcrumbs = response.slice(
          response.length - 1,
          response.length
        );

        setMenuItems(menu);
        setBreadcrumbs(prevBreadcrumbs[0].current);

        removeRequest();
      })
      .catch(() => {
        alert("Erro ao carregar as categorias!", false);

        removeRequest();
      });
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <CategoriesContext.Provider value={{ menuItems, breadcrumbs, alert }}>
      {children}
    </CategoriesContext.Provider>
  );
}
