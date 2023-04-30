import { Field, Form } from 'formik';
import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';
import { FormError } from '../../Atoms/FormError/FormError';

export const StyledSettingsForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  user-select: none;
`;

export const StyledInput = styled(Field)`
  width: 100%;
  height: 55px;
  border: 3px solid ${(props: ThemeProps) => props.theme.colors.purple};
  border-radius: 10px;
  justify-self: center;
  background-color: ${(props: ThemeProps) => props.theme.colors.inputBlue};
  padding: 0 15px;
  color: ${(props: ThemeProps) => props.theme.colors.buttonGreen};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
  outline: none;
  ::placeholder {
    color: ${(props: ThemeProps) => props.theme.colors.greenPlaceholder};
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
  }
  :focus {
    border: 3px solid ${(props: ThemeProps) => props.theme.colors.orange};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
  }

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 45px;
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.mediumNavigationButton};
  }
`;

export const Label = styled.label`
  color: ${(props: ThemeProps) => props.theme.colors.darkPurple};
  font-weight: bold;
  width: fit-content;
  height: 30px;
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.smallError};
`;

export const LongInputWrapper = styled.div`
  width: 100%;
  height: 90px;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 80px;
  }
`;

export const ShortInputWrapper = styled.div`
  width: 210px;
  height: 90px;
  align-self: flex-start;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 80px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
`;

export const StyledFormError = styled(FormError)`
  top: -95px;
  min-width: 120%;
`;
