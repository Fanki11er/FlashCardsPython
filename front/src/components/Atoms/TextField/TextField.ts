import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

export const TextField = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 55px;
  border: 3px solid ${(props: ThemeProps) => props.theme.colors.purple};
  border-radius: 10px;
  justify-self: center;
  background-color: ${(props: ThemeProps) => props.theme.colors.inputBlue};
  padding: 0 15px;
  color: ${(props: ThemeProps) => props.theme.colors.buttonGreen};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 45px;
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.mediumNavigationButton};
  }
`;
