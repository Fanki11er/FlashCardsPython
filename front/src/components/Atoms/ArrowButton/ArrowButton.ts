import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../../Assets/Svg/Arrow.svg';
import { ThemeProps } from '../../../Theme/theme';

export const ArrowButton = styled(Arrow)`
  width: 60px;
  height: 60px;
  transition: all 0.5s;
  border-radius: 100%;
  :hover {
    transform: scale(120%);
    background-color: ${(props: ThemeProps) => props.theme.colors.orange};
  }
`;

