import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

interface StylingProps {
  color: string;
}

export const FlashCardsAmountWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.3fr 0.3fr;
  grid-gap: 5px;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 25px 20px;
  color: ${(props: StylingProps) => props.color};
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    padding: 15px 20px;
  }
`;

export const AmountInfoSpan = styled.span`
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
  font-family: 'Roboto';
  text-align: center;
  width: 100%;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.mediumNavigationButton};
  }
`;
