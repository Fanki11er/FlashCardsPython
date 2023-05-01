import styled from 'styled-components';
import { ReactComponent as Refresh } from '../../../Assets/Svg/Refresh.svg';
import { ThemeProps } from '../../../Theme/theme';

export const RefreshButton = styled(Refresh)`
  width: 60px;
  height: 60px;
  transition: all 0.5s;
  border-radius: 100%;
  :hover {
    transform: scale(120%) rotate(-180deg);
    border: 2px solid ${(props: ThemeProps) => props.theme.colors.orange};
  }
`;
