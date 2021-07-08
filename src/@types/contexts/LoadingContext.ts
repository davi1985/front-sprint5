import { ReactNode } from 'react';

export type LoadingProviderProps = {
  children: ReactNode;
};

export type LoadingContextData = {
  addRequest: () => void;
  removeRequest: () => void;
  loading: boolean;
};
