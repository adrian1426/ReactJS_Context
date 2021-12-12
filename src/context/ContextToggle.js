import { createContext, useState } from 'react';

export const Context = createContext({
  valor: false,
  toggle: () => { }
});

export const Provider = ({ children }) => {

  const [valor, setValor] = useState(false);

  const value = {
    valor,
    toggle: () => setValor(!valor)
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};