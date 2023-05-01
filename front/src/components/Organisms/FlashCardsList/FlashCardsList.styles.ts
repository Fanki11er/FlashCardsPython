import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

export const FlashCardsListWrapper = styled.ul`
  width: 100%;
  height: 350px;
  padding: 25px;
  border-radius: 15px;
  border: 3px solid ${(props: ThemeProps) => props.theme.colors.purple};
  background-color: ${(props: ThemeProps) => props.theme.colors.inputBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  user-select: none;

  ::-webkit-scrollbar {
    width: 15px;
    background-color: ${(props: ThemeProps) => props.theme.colors.inputBlue};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props: ThemeProps) => props.theme.colors.listElementBlue};
    border-radius: 15px;
    border: 1px solid;
  }

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 310px;
  }
`;
