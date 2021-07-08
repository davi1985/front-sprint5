import { ReactNode } from 'react';

export type AlertProviderProps = {
  children: ReactNode;
};

export type AlertContextData = {
  message: string;
  success: boolean;
  alert: (messaAlert: string, successType: boolean) => void;
};
