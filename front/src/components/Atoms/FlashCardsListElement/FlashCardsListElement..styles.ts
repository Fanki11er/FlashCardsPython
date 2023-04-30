import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

export const FlashCardsListElementWrapper = styled.li`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props: ThemeProps) => props.theme.colors.purple};
  background-color: ${(props: ThemeProps) => props.theme.colors.navigationButton};
  margin-bottom: 15px;
  color: ${(props: ThemeProps) => props.theme.colors.purple};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
  border-radius: 15px;
  transition: all 0.3s;

  :hover {
    border: 3px solid ${(props: ThemeProps) => props.theme.colors.darkOrange};
    cursor: pointer;
  }

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 45px;
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.mediumNavigationButton};
  }
`;
