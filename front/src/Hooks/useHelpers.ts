import {
  FlashCard,
  FlashCardDto,
  UserSettings,
  UserSettingsDto,
} from "../Interfaces/Interfaces";

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

  const convertDtoToUserSettings = (settingsDto: UserSettingsDto) => {
    const userSettings: UserSettings = {
      dailyFlashCards: settingsDto.daily_flashcards,
      maximumBreak: settingsDto.maximum_break,
      percentNew: settingsDto.percent_new,
    };
    return userSettings;
  };

  const convertUserSettingsToDto = (userSettings: UserSettings) => {
    const userSettingsDto: UserSettingsDto = {
      maximum_break: userSettings.maximumBreak,
      daily_flashcards: userSettings.dailyFlashCards,
      percent_new: userSettings.percentNew,
    };
    return userSettingsDto;
  };
  return {
    convertToFlashCards,
    convertToFlashcardDto,
    convertDtoToUserSettings,
    convertUserSettingsToDto,
  };
};

export default useHelpers;
