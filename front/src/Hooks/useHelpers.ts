import { FlashCard, FlashCardDto } from "../Interfaces/Interfaces";

const useHelpers = () => {
  const convertToFlashCards = (data: FlashCardDto[]) => {
    const flashCards = data.map((flashcard) => {
      return {
        id: flashcard.id,
        frontText: flashcard.front_text,
        backText: flashcard.back_text,
        status: flashcard.status,
        correctAtRow: flashcard.correct_at_row,
        nextSession: flashcard.next_Session,
      } as FlashCard;
    });
    return flashCards;
  };

  const convertToFlashcardDto = (flashcard: FlashCard) => {
    const flashCardDto: FlashCardDto = {
      id: flashcard.id,
      correct_at_row: flashcard.correctAtRow,
      front_text: flashcard.frontText,
      back_text: flashcard.backText,
      next_Session: flashcard.nextSession,
      status: flashcard.status,
    };
    return flashCardDto;
  };
  return {
    convertToFlashCards,
    convertToFlashcardDto,
  };
};

export default useHelpers;
