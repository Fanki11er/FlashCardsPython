import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
import endpoints from '../../Api/endpoints';
import MainMenu from '../../components/Organisms/MainMenu/MainMenu';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';
import { FlashCardsStatus } from '../../Interfaces/Interfaces';
import routes from '../../Routes/routes';
import { MainPageWrapper, StyledError } from './MainPage.styles';

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
  const [isError, setError] = useState('');
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getFlashCardsInfo = async () => {
      setError('');
      try {
        const response = await axiosPrivate.get(statusEndpoint, {
          signal: controller.signal,
        });
        isMounted && setFlashCardsInfo(response.data);
      } catch (error: any) {
        if (!error?.response) {
          setError('Błąd połączenia');
        } else if (error.response?.status === 401) {
          setError('Brak autoryzacji');
        } else {
          setError('Błąd połączenia');
        }
        navigate(login, {
          state: {
            from: location,
          },
          replace: true,
        });
      }
    };

    getFlashCardsInfo();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [statusEndpoint, navigate, location, login, axiosPrivate, refresh]);
  return (
    <MainPageWrapper>
      {isError ? <StyledError /> : null}
      <MainMenu flashCardsInfo={flashCardsInfo} />
    </MainPageWrapper>
  );
};
export default MainPage;
