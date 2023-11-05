import { createContext, useEffect, useState } from "react";
import { Data } from "../Data/Data";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = async () => {
    await fetch(Data)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data: data }}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
