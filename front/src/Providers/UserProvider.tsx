import { AxiosError, AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import endpoints from "../Api/endpoints";
import useAuth from "../Hooks/useAuth";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import useLoader from "../Hooks/useLoader";
import { Status, User } from "../Types/types";
import { UserSettings, UserSettingsDto } from "../Interfaces/Interfaces";
import useHelpers from "../Hooks/useHelpers";

interface UserContextInterface {
  user: User | null;
  userSettings: UserSettings | null;
  handleSetUser: (user: User | null) => void;
  handleSetUserSettings: (userSettings: UserSettings) => void;
  handleLogout: () => void;
  status: Status;
  error: string;
}

export const UserContext = createContext<UserContextInterface>({
  user: null,
  userSettings: null,
  // eslint-disable-next-line
  handleSetUser: (user: User | null) => {},
  // eslint-disable-next-line
  handleSetUserSettings: (userSettings: UserSettings) => {},
  // eslint-disable-next-line
  handleLogout: () => {},
  status: "",
  error: "",
});

const UserProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const { getSettingsEndpoint } = endpoints;
  const [user, setUser] = useState<User | null>(null);
  const [userSettings, setUserSettings] = useState<UserSettings | null>(null);
  const { status, startLoading, finishedLoading, handleError, error } =
    useLoader();
  const { handleDeleteTokens } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const { convertDtoToUserSettings } = useHelpers();

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

  const handleSetUser = (user: User | null) => {
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
