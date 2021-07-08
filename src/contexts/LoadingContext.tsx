import { createContext, useState } from 'react';

import {
  LoadingContextData,
  LoadingProviderProps,
} from '../@types/contexts/LoadingContext';

export const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData,
);

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [counterRequest, setCounterRequest] = useState(0);

  function addRequest() {
    if (!loading) {
      setLoading(true);
    }
    setCounterRequest(counterRequest + 1);
  }

  function removeRequest() {
    if (counterRequest <= 1) {
      setCounterRequest(0);

      setLoading(false);
    } else {
      setCounterRequest(counterRequest - 1);
    }
  }

  return (
    <LoadingContext.Provider value={{ addRequest, removeRequest, loading }}>
      {children}
    </LoadingContext.Provider>
  );
}
