import styled from 'styled-components';
import { ReactComponent as Menu } from '../../../Assets/Svg/MenuPerson.svg';
import { ThemeProps } from '../../../Theme/theme';

export const MainMenuWrapper = styled.div`
  width: 100%;
  height: 700px;
  padding: 55px 20px;
  background: linear-gradient(135deg, #5172bf, #4eb1d1);
  border-radius: 15px;
  display: grid;
  grid-template-rows: 200px 300px;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
  grid-row-gap: 40px;
  position: relative;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    padding: 45px 20px;
    grid-row-gap: 20px;
    grid-template-rows: 150px 300px;
    height: 580px;
  }
`;

export const MenuButtonsWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-row: 2 / span 1;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 100%;
  }
`;

export const MenuPerson = styled(Menu)`
  position: absolute;
  left: -80px;
  bottom: -90px;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 70%;
    left: -100px;
    bottom: -70px;
  }
`;
