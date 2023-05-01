import { AxiosError, AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import endpoints from "../Api/endpoints";
import useAuth from "../Hooks/useAuth";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import useLoader from "../Hooks/useLoader";
//import { owner } from "../Mocks/UserMocks";
import { Status, User } from "../Types/types";
import { UserSettings, UserSettingsDto } from "../Interfaces/Interfaces";
import useHelpers from "../Hooks/useHelpers";

interface UserContextInterface {
  user: User | null;
  userSettings: UserSettings | null;
  handleSetUser: (user: User) => void;
  handleSetUserSettings: (userSettings: UserSettings) => void;
  handleLogout: () => void;
  status: Status;
  error: string;
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  userSettings: null,
  // eslint-disable-next-line
  handleSetUser: (user: User) => {},
  // eslint-disable-next-line
  handleSetUserSettings: (userSettings: UserSettings) => {},
  // eslint-disable-next-line
  handleLogout: () => {},
  status: "",
  error: "",
});

const UserProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const { getUser, getSettingsEndpoint } = endpoints;
  const [user, setUser] = useState<User | null>(null);
  const [userSettings, setUserSettings] = useState<UserSettings | null>(null);
  const { status, startLoading, finishedLoading, handleError, error } =
    useLoader();
  const { getAccessFromStorage, handleDeleteTokens } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const { convertDtoToUserSettings } = useHelpers();

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

  useEffect(() => {
    if (user && !userSettings) {
      startLoading();
      axiosPrivate
        .get(getSettingsEndpoint)
        .then((response: AxiosResponse) => {
          const settingsDto: UserSettingsDto | undefined = response.data;

          if (settingsDto) {
            const convertedSetting = convertDtoToUserSettings(settingsDto);
            setUserSettings(convertedSetting);
          }
          finishedLoading();
        })
        .catch((e: AxiosError) => {
          const data = e.response?.data as any;
          handleError(data?.messages[0]?.message);
          console.log(data?.messages[0]?.message);
        });
    }
  }, [user]);

  const handleSetUser = (user: User) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
    handleDeleteTokens();
  };

  const handleSetUserSettings = (userSettings: UserSettings) => {
    setUserSettings(userSettings);
  };

  const context = {
    user,
    handleSetUser,
    handleLogout,
    handleSetUserSettings,
    userSettings,
    status,
    error,
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
