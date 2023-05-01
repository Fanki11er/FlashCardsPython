import { useEffect, useState } from "react";
import { FlashCard } from "../../../Interfaces/Interfaces";
import { ArrowButton } from "../../Atoms/ArrowButton/ArrowButton";
import { RefreshButton } from "../../Atoms/RefreshButton/RefreshButton";
import { TextField } from "../../Atoms/TextField/TextField";
import LearnAnswerForm from "../LearnAnswerForm/LearnAnswerForm";
import {
  BottomSection,
  FormWrapper,
  LearnSectionWrapper,
  ResultWrapper,
  StyledCorrect,
  StyledHut,
  StyledSpan,
  StyledTextField,
  StyledWrong,
} from "./LearnSection.styles";

interface Props {
  flashCardsToLearn: FlashCard[];
  updateFlashCard: (flashCard: FlashCard) => Promise<void>;
  refresh: () => void;
}

const LearningSection = (props: Props) => {
  const { flashCardsToLearn, updateFlashCard, refresh } = props;
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [answer, setAnswer] = useState("");

  const checkAnswer = (answer: string) => {
    setAnswer(answer);
    if (
      answer.toLowerCase() ===
      flashCardsToLearn[currentIndex].backText.toLowerCase()
    ) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
    setIsAnswered(true);
  };

  const nextFlashCard = () => {
    if (currentIndex < flashCardsToLearn.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsAnswered(false);
      setAnswer("");
    }
  };

  const changeFlashCardFields = (flashCard: FlashCard) => {
    if (isCorrectAnswer) {
      flashCard.status = "LEARNT";
      flashCard.correctAtRow = flashCard.correctAtRow + 1;
    } else {
      flashCard.status = "LEARN";
      flashCard.correctAtRow = 0;
    }
    return flashCard;
  };

  useEffect(() => {
    if (isAnswered === true) {
      updateFlashCard(changeFlashCardFields(flashCardsToLearn[currentIndex]));
    }
  }, [isAnswered]); // eslint-disable-line

  return (
    <LearnSectionWrapper>
      {!isAnswered ? (
        <FormWrapper>
          <TextField>
            {flashCardsToLearn.length > 0
              ? flashCardsToLearn[currentIndex].frontText
              : ""}
          </TextField>
          <LearnAnswerForm
            checkAnswer={checkAnswer}
            flashCards={flashCardsToLearn.length > 0}
          />
        </FormWrapper>
      ) : (
        <ResultWrapper>
          <StyledTextField correct={isCorrectAnswer}>
            {flashCardsToLearn[currentIndex].backText}
          </StyledTextField>
          <StyledTextField correct={isCorrectAnswer}>{answer}</StyledTextField>
          {isCorrectAnswer ? <StyledCorrect /> : <StyledWrong />}
        </ResultWrapper>
      )}

      <BottomSection>
        <StyledSpan>
          {flashCardsToLearn.length
            ? `${currentIndex + 1} / ${flashCardsToLearn.length}`
            : `0 / 0`}
        </StyledSpan>
        {isAnswered && currentIndex < flashCardsToLearn.length - 1 ? (
          <ArrowButton onClick={() => nextFlashCard()} />
        ) : isAnswered && currentIndex === flashCardsToLearn.length - 1 ? (
          <RefreshButton onClick={() => refresh()} />
        ) : null}
      </BottomSection>
      <StyledHut />
    </LearnSectionWrapper>
  );
};

export default LearningSection;
