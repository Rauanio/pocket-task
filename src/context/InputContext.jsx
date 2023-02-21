import React, { createContext } from 'react';

export const InputContext = createContext();

const InputContextProvider = ({ children }) => {
  const [value, setValue] = React.useState({ title: '', desc: '', username: '', password: '' });
  return <InputContext.Provider value={{ value, setValue }}>{children}</InputContext.Provider>;
};

const useInputContext = () => {
  return React.useContext(InputContext);
};

export { InputContextProvider, useInputContext };
