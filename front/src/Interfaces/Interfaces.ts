export interface UserSettings {
  dailyFlashCards: number;
  maximumBreak: number;
  percentNew: number;
}
export interface AuthUser {
  id: number;
  name: string;
  settings: UserSettings;
  accessToken?: string;
}

export interface FlashCardsStatus {
  allAmount: number;
  toLearnAmount: number;
  newAmount: number;
}
export interface FlashCardsStatusDto {
  all_flashcards: number;
  to_learn_flashcards: number;
  new_flashcards: number;
}

export interface FlashCard {
  id: number;
  frontText: string;
  backText: string;
  status: Status;
  nextSession: Date;
  correctAtRow: number;
}

export interface FlashCardDto {
  id: number;
  front_text: string;
  back_text: string;
  status: Status;
  next_Session: Date;
  correct_at_row: number;
}

export type Status = "NEW" | "LEARN" | "LEARNT";
