import styled from 'styled-components';
import { Field } from 'formik';
import { ThemeProps } from '../../../Theme/theme';

export const DefaultField = styled(Field)`
  display: grid;
  grid-column: 2 / span 1;
  width: 65%;
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
