import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';

export const AddFlashCardsSectionWrapper = styled.div`
  width: 80%;
  height: 550px;
  padding: 30px 60px 0px 60px;
  background: linear-gradient(135deg, #5172bf, #4eb1d1);
  border-radius: 15px;
  position: relative;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 420px;
    min-width: 600px;
    padding: 30px 0px 0 0px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
