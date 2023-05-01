import { Link } from 'react-router-dom';
import { FlashCardsStatus } from '../../../Interfaces/Interfaces';
import routes from '../../../Routes/routes';
import { DisabledButton, MainMenuButton } from '../../Atoms/Buttons/Buttons';
import FlashCardsInfo from '../../Molecules/FlashCardsInfo/FlashCardsInfo';
import { MainMenuWrapper, MenuButtonsWrapper, MenuPerson } from './MainMenu.styles';

interface Props {
  flashCardsInfo: FlashCardsStatus | undefined;
}

const MainMenu = (props: Props) => {
  const { learn, maintenance, settings } = routes;
  return (
    <MainMenuWrapper>
      <FlashCardsInfo flashCardsInfo={props.flashCardsInfo} />
      <MenuButtonsWrapper>
        {props.flashCardsInfo && props.flashCardsInfo.allAmount > 0 ? (
          <MainMenuButton as={Link} to={learn}>
            Ucz się
          </MainMenuButton>
        ) : (
          <DisabledButton>Ucz się</DisabledButton>
        )}

        <MainMenuButton as={Link} to={maintenance} state={{ action: 'ADD' }}>
          Dodaj fiszkę
        </MainMenuButton>
        {props.flashCardsInfo && props.flashCardsInfo.allAmount > 0 ? (
          <MainMenuButton as={Link} to={maintenance} state={{ action: 'EDIT' }}>
            Edytuj fiszkę
          </MainMenuButton>
        ) : (
          <DisabledButton>Edytuj fiszkę</DisabledButton>
        )}
        <MainMenuButton as={Link} to={settings}>
          Ustawienia
        </MainMenuButton>
      </MenuButtonsWrapper>
      <MenuPerson/>
    </MainMenuWrapper>
  );
};
export default MainMenu;
