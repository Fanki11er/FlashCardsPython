import { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";

const useUser = () => {
  return useContext(UserContext);
};

export default useUser;
