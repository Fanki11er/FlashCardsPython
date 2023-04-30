import styled from 'styled-components';
import { ReactComponent as Loader } from '../../../Assets/Svg/Loader.svg';
import { ThemeProps } from '../../../Theme/theme';

export const LoaderWrapper = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  animation-name: show;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;

  @keyframes show {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

export const StyledLoader = styled(Loader)``;

export const Information = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0 20px;
  border: 3px solid ${(props: ThemeProps) => props.theme.colors.purple};
  border-radius: 10px;
  justify-self: center;
  background-color: ${(props: ThemeProps) => props.theme.colors.inputBlue};
  color: ${(props: ThemeProps) => props.theme.colors.buttonGreen};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.navigationButton};
`;

