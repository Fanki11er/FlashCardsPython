import styled from 'styled-components';
import { ThemeProps } from '../../../Theme/theme';
import { TextField } from '../../Atoms/TextField/TextField';
import { ReactComponent as Hut } from '../../../Assets/Svg/Hut.svg';
import { ReactComponent as Correct } from '../../../Assets/Svg/Correct.svg';
import { ReactComponent as Wrong } from '../../../Assets/Svg/Wrong.svg';

interface FieldProps {
  correct: boolean;
}

export const LearnSectionWrapper = styled.div`
  position: relative;
  width: 80%;
  min-width: 800px;
  height: 520px;
  padding: 60px 60px 30px 60px;
  background: linear-gradient(135deg, #5172bf, #4eb1d1);
  border-radius: 15px;
  display: grid;
  grid-template-rows: 1fr 60px;

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 400px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.3fr 0.7fr;
  grid-row-gap: 8px;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    height: 80%;
  }
`;

export const BottomSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 40px;
  padding: 5px 10px;
  color: ${(props: ThemeProps) => props.theme.colors.lightBlue};
  font-size: ${(props: ThemeProps) => props.theme.fontSizes.smallError};
  border: 3px solid ${(props: ThemeProps) => props.theme.colors.purple};
  border-radius: 10px;
  justify-self: center;
  background-color: ${(props: ThemeProps) => props.theme.colors.inputBlue};
  user-select: none;
`;

export const StyledHut = styled(Hut)`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -80px;
  left: -35px;
`;

export const ResultWrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 100px 1fr;
  width: 100%;
  height: 100%;
  align-items: center;

  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    grid-template-rows: 70px 70px 1fr;
  }
`;

export const StyledCorrect = styled(Correct)`
  width: 120px;
  height: 120px;
  justify-self: center;
  align-self: flex-end;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    width: 80px;
    height: 80px;
  }
`;
export const StyledWrong = styled(Wrong)`
  width: 120px;
  height: 120px;
  justify-self: center;
  align-self: flex-end;
  @media screen and (${(props: ThemeProps) => props.theme.devices.medium}) {
    width: 80px;
    height: 80px;
  }
`;

export const StyledTextField = styled(TextField)`
  display: flex;
  color: ${(props: ThemeProps & FieldProps) => (props.correct ? props.theme.colors.buttonGreen : props.theme.colors.errorRed)};
  border: 3px solid ${(props: ThemeProps & FieldProps) => (props.correct ? props.theme.colors.buttonGreen : props.theme.colors.errorRed)};
  align-items: center;
`;
