import styled from 'styled-components';
import { ReactComponent as Edit } from '../../../Assets/Svg/EditPerson.svg';
import { ThemeProps } from '../../../Theme/theme';

export const EditFlashCardSectionWrapper = styled.div`
  width: 120%;
  height: 500px;
  padding: 90px 40px;
  background: linear-gradient(135deg, #5172bf, #4eb1d1);
  border-radius: 20px;
  position: relative;
  min-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 370px;
    padding: 60px 40px;
  }
`;

export const EditPerson = styled(Edit)`
  position: absolute;
  left: -300px;
  bottom: -20px;

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 75%;
    left: -250px;
  }
`;
