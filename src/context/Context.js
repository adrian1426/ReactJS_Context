import { createContext } from 'react';

export const Context = createContext('valor por defecto');

export const Provider = ({ children }) => {
  return (
    <Context.Provider
      value={'mi valor provider'}
    >
      {children}
    </Context.Provider>
  );
};