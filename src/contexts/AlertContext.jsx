import { createContext, useState } from 'react';

export const AlertContext = createContext([]);

export function AlertProvider({ children }) {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  function alert(messageAlert, successType) {
    setMessage(messageAlert);
    setSuccess(successType);

    setTimeout(() => setMessage(), [4000]);
  }
  return (
    <AlertContext.Provider value={{ message, success, alert }}>
      {children}
    </AlertContext.Provider>
  );
}
