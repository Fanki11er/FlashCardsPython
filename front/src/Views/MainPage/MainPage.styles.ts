import styled from 'styled-components';
import { FormError } from '../../components/Atoms/FormError/FormError';
import { ThemeProps } from '../../Theme/theme';

export const MainPageWrapper = styled.div`
  display: grid;
  grid-template-rows: 55px 1fr;
  grid-template-columns: 1fr 30% 1fr;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: transparent;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    grid-template-columns: 1fr 420px 1fr;
  }
`;

export const StyledError = styled(FormError)`
  position: initial;
  grid-row: 1 / span 1;
  grid-column: 2 / span 1;
`;
