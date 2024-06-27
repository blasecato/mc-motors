import { createContext, useState } from 'react';


interface ProviderProps {
  children: React.ReactNode
}

const GlobalContext = createContext({});
const GlobalProvider = ({ children }: ProviderProps) => {
  const [isMenu, setMenu] = useState("all")
  return (
    <GlobalContext.Provider
      value={{
        isMenu,
        setMenu
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
export default GlobalContext;
