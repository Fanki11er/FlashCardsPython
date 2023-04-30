import Logo, { Test } from '../../Atoms/Logo/Logo';
import { NavigationButton } from '../../Atoms/NavigationButton/NavigationButton';
import { ButtonsWrapper, NavigationWrapper, StyledWrapper } from './Navigation.styles';
import routes from '../../../Routes/routes';
import { useLocation } from 'react-router';
import UserPicture from '../../Atoms/UserPicture/UserPicture';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
  const { login, registration, main, learn, maintenance, settings } = routes;

  const { auth, setAuth } = useAuth();

  const { pathname } = useLocation();
  return (
    <NavigationWrapper>
      <Test to={'/'}>
        <Logo />
      </Test>
      <StyledWrapper>
        {auth?.name && auth?.accessToken ? <UserPicture userName={auth.name} /> : null}
        {pathname === '/' && (
          <ButtonsWrapper>
            {auth?.accessToken ? (
              <>
                <NavigationButton to={main}>Menu</NavigationButton>
                <NavigationButton to="/" onClick={() => setAuth(undefined)}>
                  Wyloguj
                </NavigationButton>
              </>
            ) : (
              <>
                <NavigationButton to={login}>Zaloguj</NavigationButton>
                <NavigationButton to={registration}>Rejestracja</NavigationButton>
              </>
            )}
          </ButtonsWrapper>
        )}
        {pathname === registration && (
          <ButtonsWrapper>
            <NavigationButton to={login}>Zaloguj</NavigationButton>
            <NavigationButton to="/">Powrót</NavigationButton>
          </ButtonsWrapper>
        )}
        {pathname === login && (
          <ButtonsWrapper>
            <NavigationButton to={registration}>Rejestracja</NavigationButton>
            <NavigationButton to="/">Powrót</NavigationButton>
          </ButtonsWrapper>
        )}
        {(pathname === learn || pathname === maintenance || pathname === settings) && (
          <ButtonsWrapper>
            <NavigationButton to="/" onClick={() => setAuth(undefined)}>
              Wyloguj
            </NavigationButton>
            <NavigationButton to={main}>Menu</NavigationButton>
          </ButtonsWrapper>
        )}

        {pathname === main && (
          <ButtonsWrapper>
            <NavigationButton to="/" onClick={() => setAuth(undefined)}>
              Wyloguj
            </NavigationButton>
          </ButtonsWrapper>
        )}
      </StyledWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
