import { StyledForm } from '../../Atoms/StyledForm/StyledForm';
import styled from 'styled-components';
import { Field } from 'formik';
import { ThemeProps } from '../../../Theme/theme';
import ErrorInfo from '../../Atoms/ErrorInfo/ErrorInfo';
import { ReactComponent as Person } from '../../../Assets/Svg/Person_adding.svg';
import { FormError } from '../../Atoms/FormError/FormError';

export const StyledAddFlashCardsForm = styled(StyledForm)`
  position: relative;

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    width: 500px;
    grid-template-rows: 120px 0.5fr 0.5fr 1fr;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 550px;
  justify-self: center;
  margin-bottom: 50px;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    width: 420px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const NewFlashCardsInput = styled(Field)`
  display: flex;
  width: 100%;
  height: 55px;
  border: 3px solid ${(props: ThemeProps) => props.theme.colors.purple};
  border-radius: 10px;
  justify-self: center;
  background-color: ${(props: ThemeProps) => props.theme.colors.inputBlue};
  padding: 0 15px;
  color: ${(props: ThemeProps) => props.theme.colors.buttonGreen};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
  transition: border 0.5s;
  outline: none;
  ::placeholder {
    color: ${(props: ThemeProps) => props.theme.colors.greenPlaceholder};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
  }
  :focus {
    border: 3px solid ${(props: ThemeProps) => props.theme.colors.orange};
  }

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    width: 80%;
    height: 45px;
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.mediumNavigationButton};
  }
`;

export const StyledError = styled(ErrorInfo)`
  width: 100%;
  padding: 0px 10px;
  height: 35px;
  transform: translateX(0);
  margin-right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.verySmallError};
    height: 25px;
    width: 80%;
  }
`;

export const StyledPerson = styled(Person)`
  height: 80%;
  position: absolute;
  bottom: -20px;
  left: -205px;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 70%;
    bottom: 0;
    left: -170px;
  }
`;

export const StyledFormError = styled(FormError)`
  top: -80px;
  min-width: 120%;
  transform: translateX(-65px);
`;
