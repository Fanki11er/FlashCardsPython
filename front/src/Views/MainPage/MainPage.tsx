import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate, Navigate } from "react-router";
import endpoints from "../../Api/endpoints";
import MainMenu from "../../components/Organisms/MainMenu/MainMenu";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import {
  FlashCardsStatus,
  FlashCardsStatusDto,
} from "../../Interfaces/Interfaces";
import routes from "../../Routes/routes";
import { MainPageWrapper, StyledError } from "./MainPage.styles";
import useUser from "../../Hooks/useUser";

type LocationProps = {
  state: {
    refresh: boolean;
  };
};

const MainPage = () => {
  const { statusEndpoint } = endpoints;
  const { login } = routes;
  const [flashCardsInfo, setFlashCardsInfo] = useState<FlashCardsStatus>();
  const navigate = useNavigate();
  const location = useLocation() as LocationProps;
  const refresh = location.state?.refresh;
  const axiosPrivate = useAxiosPrivate();
  const [isError, setError] = useState("");
  const { user } = useUser();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getFlashCardsInfo = async () => {
      setError("");
      try {
        const response = await axiosPrivate.get(statusEndpoint, {
          signal: AbortSignal.timeout(5000),
        });
        const data: FlashCardsStatusDto = response.data;
        const convertedStatusInfo: FlashCardsStatus = {
          allAmount: data.all_flashcards,
          newAmount: data.new_flashcards,
          toLearnAmount: data.to_learn_flashcards,
        };

        isMounted && setFlashCardsInfo(convertedStatusInfo);
      } catch (error: any) {
        if (error?.response) {
          setError("Błąd połączenia");
        } else if (error.response?.status === 401) {
          setError("Brak autoryzacji");
        } else {
          setError("Błąd połączenia");
        }

        /* navigate(login, {
          state: {
            from: location,
          },
          replace: true,
        });*/
      }
    };

    getFlashCardsInfo();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [statusEndpoint, navigate, location, login, axiosPrivate, refresh]);
  return user ? (
    <MainPageWrapper>
      {isError ? <StyledError /> : null}
      <MainMenu flashCardsInfo={flashCardsInfo} />
    </MainPageWrapper>
  ) : (
    <Navigate to={login} />
  );
};
export default MainPage;
