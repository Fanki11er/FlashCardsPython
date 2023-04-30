import styled from 'styled-components';
import { ReactComponent as Party } from '../../Assets/Svg/Party.svg';
import { TextField } from '../../components/Atoms/TextField/TextField';

export const LearningPageWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

export const NothingToLearn = styled(Party)`
  width: 80%;
  height: 80%;
  margin-bottom: 50px;
`;

export const InformationField = styled(TextField)`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  user-select: none;
`;

export const InfoWrapper = styled.div`
  opacity: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  animation-name: show;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;

  @keyframes show {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
