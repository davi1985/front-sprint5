import { ReactNode } from 'react';

import { Breadcrumb } from '../components/Breadcrumb';
import { MenuItemType } from '../components/Menu';

export type CategoriesProviderProps = {
  children: ReactNode;
};

export type CategoriesContextData = {
  menuItems: MenuItemType[];
  breadcrumbs: Breadcrumb[];
  alert: (messaAlert: string, successType: boolean) => void;
};
