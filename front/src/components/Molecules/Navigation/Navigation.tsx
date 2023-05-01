import Logo, { Test } from "../../Atoms/Logo/Logo";
import { NavigationButton } from "../../Atoms/NavigationButton/NavigationButton";
import {
  ButtonsWrapper,
  NavigationWrapper,
  StyledWrapper,
} from "./Navigation.styles";
import routes from "../../../Routes/routes";
import { useLocation } from "react-router";
import UserPicture from "../../Atoms/UserPicture/UserPicture";
import useUser from "../../../Hooks/useUser";

const Navigation = () => {
  const { login, registration, main, learn, maintenance, settings } = routes;

  const { handleSetUser, user } = useUser();

  const { pathname } = useLocation();
  return (
    <NavigationWrapper>
      <Test to={"/"}>
        <Logo />
      </Test>
      <StyledWrapper>
        {user?.username ? <UserPicture userName={user.username} /> : null}
        {pathname === "/" && (
          <ButtonsWrapper>
            {user?.username ? (
              <>
                <NavigationButton to={main}>Menu</NavigationButton>
                <NavigationButton to="/" onClick={() => handleSetUser(null)}>
                  Wyloguj
                </NavigationButton>
              </>
            ) : (
              <>
                <NavigationButton to={login}>Zaloguj</NavigationButton>
                <NavigationButton to={registration}>
                  Rejestracja
                </NavigationButton>
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
        {(pathname === learn ||
          pathname === maintenance ||
          pathname === settings) && (
          <ButtonsWrapper>
            <NavigationButton to="/" onClick={() => handleSetUser(null)}>
              Wyloguj
            </NavigationButton>
            <NavigationButton to={main}>Menu</NavigationButton>
          </ButtonsWrapper>
        )}

        {pathname === main && (
          <ButtonsWrapper>
            <NavigationButton to="/" onClick={() => handleSetUser(null)}>
              Wyloguj
            </NavigationButton>
          </ButtonsWrapper>
        )}
      </StyledWrapper>
    </NavigationWrapper>
  );
};

export default Navigation;
