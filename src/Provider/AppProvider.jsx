import { createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ data: "all" }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
