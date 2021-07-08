import { createContext, useState } from 'react';

import {
  AlertContextData,
  AlertProviderProps,
} from '../@types/contexts/AlertContext';

export const AlertContext = createContext<AlertContextData>(
  {} as AlertContextData,
);

export function AlertProvider({ children }: AlertProviderProps) {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  function alert(messageAlert: string, successType: boolean): void {
    setMessage(messageAlert);
    setSuccess(successType);

    setTimeout(() => setMessage(''), 4000);
  }
  return (
    <AlertContext.Provider value={{ message, success, alert }}>
      {children}
    </AlertContext.Provider>
  );
}
