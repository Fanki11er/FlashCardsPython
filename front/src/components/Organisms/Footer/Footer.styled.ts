import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 100px;
  background: linear-gradient(90deg, transparent, rgba(41, 128, 168, 0.2), rgba(40, 33, 141, 0.3));
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 80px;
  }
`;

export const InfoWrapper = styled.div`
  height: 100%;
  width: 800px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.span`
  width: fit-content;
  height: 100%;
  padding: 0 15px;
  font-family: 'Roboto';
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.smallError};
  color: ${(props: ThemeProps) => props.theme.colors.purple};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.verySmallError};
  }
`;
