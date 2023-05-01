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
