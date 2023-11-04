import { useContext } from "react";
import { AppContext } from "../Provider/AppProvider";

const useAppProvider = () => {
  return useContext(AppContext);
};

export default useAppProvider;
