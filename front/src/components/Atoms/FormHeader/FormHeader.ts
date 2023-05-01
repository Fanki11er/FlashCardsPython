import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

export const FormHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.mediumHeader};
  color: ${({ theme }) => theme.colors.purple};
  text-align: center;

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    font-size: ${({ theme }) => theme.fontSizes.smallHeader};
  }
`;
