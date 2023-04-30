import { AxiosError, AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import endpoints from "../Api/endpoints";
import useAuth from "../Hooks/useAuth";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import useLoader from "../Hooks/useLoader";
//import { owner } from "../Mocks/UserMocks";
import { Status, User } from "../Types/types";

interface UserContextInterface {
  user: User | null;
  handleSetUser: (user: User) => void;
  handleLogout: () => void;
  status: Status;
  error: string;
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  // eslint-disable-next-line
  handleSetUser: (user: User) => {},
  // eslint-disable-next-line
  handleLogout: () => {},
  status: "",
  error: "",
});

const UserProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const { getUser, baseURL } = endpoints;
  const [user, setUser] = useState<User | null>(null);
  const { status, startLoading, finishedLoading, handleError, error } =
    useLoader();
  const { getAccessFromStorage, handleDeleteTokens } = useAuth();
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const access = getAccessFromStorage();
    if (!user && access) {
      startLoading();
      axiosPrivate
        .get(getUser)
        .then((response: AxiosResponse) => {
          const user: User | undefined = response.data;

          if (user) {
            setUser({
              username: user.username,
            });
          }
          finishedLoading();
        })
        .catch((e: AxiosError) => {
          const data = e.response?.data as any;
          handleError(data?.messages[0]?.message);
          console.log(data?.messages[0]?.message);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSetUser = (user: User) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
    handleDeleteTokens();
  };

  const context = {
    user,
    handleSetUser,
    handleLogout,
    status,
    error,
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
