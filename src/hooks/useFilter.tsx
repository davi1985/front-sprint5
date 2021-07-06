import { useContext } from 'react';

import { FilterContext } from '../contexts/FilterContext';

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useProducts must be used within FilterContext');
  }
  return context;
}
