import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

export const FormError = styled.div`
  width: fit-content;
  min-width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.smallError};
  color: ${(props: ThemeProps) => props.theme.colors.errorRed};
  border: 3px solid ${(props: ThemeProps) => props.theme.colors.errorRed};
  border-radius: 15px;
  background-color: ${(props: ThemeProps) => props.theme.colors.lightRed};
  position: absolute;
  top: -15px;
  transform-origin: 50% 50%;
  opacity: 0;

  animation-name: Show;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;

  @keyframes Show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    font-size: ${(props: ThemeProps) => props.theme.fontSizes.verySmallError};
  }
`;
