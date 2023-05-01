import styled from 'styled-components';
import { ThemeProps } from '../../Theme/theme';

export const MainTemplateWrapper = styled.div`
  display: grid;
  grid-template-rows: 180px 1fr 100px;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #2e1e8c, #26b6b7);
  background-size: cover;

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    grid-template-rows: 150px 1fr 100px;
  }
`;
