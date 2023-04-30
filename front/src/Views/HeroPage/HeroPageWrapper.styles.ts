import styled from 'styled-components';
import { ReactComponent as MainFlashCard } from '../../Assets/Svg/MainFlashCard.svg';
import { ReactComponent as MainPerson } from '../../Assets/Svg/MainPerson.svg';
import { ThemeProps } from '../../Theme/theme';

export const HeroPageWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 400px;
  }
`;

export const StyledFlashCard = styled(MainFlashCard)`
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    width: 75%;
  }
`;

export const StyledMainPerson = styled(MainPerson)`
  position: absolute;
  left: -80%;
  bottom: -15%;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    width: 60%;
    height: 60%;
    left: -50%;
  }
`;
