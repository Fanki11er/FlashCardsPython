import styled from 'styled-components';
import { StyledForm } from '../../Atoms/StyledForm/StyledForm';
import { ReactComponent as Registration } from '../../../Assets/Svg/RegistrationPerson.svg';
import ErrorInfo from '../../Atoms/ErrorInfo/ErrorInfo';
import { ThemeProps } from '../../../Theme/theme';

export const StyledRegistrationForm = styled(StyledForm)`
  grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 0.5fr 1fr;
  height: 680px;
  width: 100%;
  background: linear-gradient(135deg, #5172bf, #4eb1d1);
  padding-left: 4rem;
  position: relative;
  user-select: none;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    padding: 0 1rem;
    grid-template-rows: 1fr 0.38fr 0.38fr 0.38fr 0.38fr 1fr;
    justify-content: center;
    align-items: center;
    height: 550px;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.7fr 0.3fr;
  width: 100%;
  height: 100%;
`;

export const RegistrationPerson = styled(Registration)`
  position: absolute;
  right: -165px;
  bottom: 0;

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 70%;
    right: -145px;
  }
`;

export const ErrorInput = styled(ErrorInfo)`
  min-width: 42%;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.verySmallError};
    min-width: 45%;
  }
`;
