import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

const ErrorInfo = styled.div`
  width: fit-content;
  min-width: 45%;
  height: 100%;
  color: ${(props: ThemeProps) => props.theme.colors.errorRed};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.smallError};
  text-align: center;
  justify-self: flex-end;
  font-family: 'Roboto';
  padding: 0 5rem;
  background-color: ${(props: ThemeProps) => props.theme.colors.lightRed};
  border-radius: 5px;
  transform-origin: 0% 80%;
  margin-right: 10rem;
`;

export default ErrorInfo;
