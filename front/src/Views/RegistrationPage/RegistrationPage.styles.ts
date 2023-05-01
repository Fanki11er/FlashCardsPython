import styled from 'styled-components';
import { ThemeProps } from '../../Theme/theme';

export const RegistrationPageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 45% 1fr;
  width: 100%;
  height: 100%;
  background-color: transparent;

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    grid-template-columns: 1fr 40% 1fr;
  }
`;
