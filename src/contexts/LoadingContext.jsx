import { createContext, useState } from 'react';

export const LoadingContext = createContext(false);

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
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
