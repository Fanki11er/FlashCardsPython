import { Field } from 'formik';
import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

import { StyledForm } from '../../Atoms/StyledForm/StyledForm';
import { ConnectionInfo } from '../LoginForm/LoginForm.styles';

export const StyledEditFlashCardsForm = styled(StyledForm)`
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
  background: none;
  background-image: none;
  padding: 0;
  margin: 0;
  position: relative;
  align-self: center;
  user-select: none;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  justify-self: center;
  //margin-bottom: 50px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const EditFlashCardsInput = styled(Field)`
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
    height: 45px;
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.mediumNavigationButton};
  }
`;

export const StyledConnectionInfo = styled(ConnectionInfo)`
  justify-self: center;
  align-self: center;
  width: 100%;
  height: 100%;
  margin-top: 30%;
`;
