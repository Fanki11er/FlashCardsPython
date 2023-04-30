/*import { PropsWithChildren, createContext, useState } from "react";
import { AuthUser } from "../Interfaces/Interfaces";

interface Props {
  children: React.ReactChild;
}
interface AuthContextInterface {
  setAuth: React.Dispatch<React.SetStateAction<AuthUser | undefined>>;
  auth: AuthUser | undefined;
}

export const AuthContext = createContext({

});

const AuthProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [auth, setAuth] = useState<AuthUser | undefined>({
    id: 0,
    name: "",
    settings: {
      dailyFlashCards: 10,
      maximumBreak: 60,
      percentNew: 30,
    },
    accessToken: "",
  });
  const context = {
    auth,
    setAuth,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;*/

import { createContext, PropsWithChildren } from "react";
import { TokenDto } from "../Types/types";

interface AuthContextInterface {
  handleSetToken: (token: TokenDto) => void;
  getRefreshFromStorage: () => string | null;
  getAccessFromStorage: () => string | null;
  handleDeleteTokens: () => void;
}

export const AuthContext = createContext<AuthContextInterface>({
  //eslint-disable-next-line
  handleSetToken: (token: TokenDto) => {},
  getRefreshFromStorage: () => null,
  getAccessFromStorage: () => null,
  //eslint-disable-next-line
  handleDeleteTokens: () => {},
});

const AuthProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const handleSetToken = (token: TokenDto) => {
    token.access && sessionStorage.setItem("access", token.access);
    token.refresh && sessionStorage.setItem("refresh", token.refresh);
  };

  const getRefreshFromStorage = () => {
    const refresh = sessionStorage.getItem("refresh");
    return refresh;
  };

  const getAccessFromStorage = () => {
    const access = sessionStorage.getItem("access");
    return access;
  };

  const handleDeleteTokens = () => {
    sessionStorage.removeItem("access");
    sessionStorage.removeItem("refresh");
  };

  const context = {
    handleSetToken,
    getRefreshFromStorage,
    getAccessFromStorage,
    handleDeleteTokens,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
