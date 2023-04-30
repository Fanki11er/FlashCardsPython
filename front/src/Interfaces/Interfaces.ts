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

export interface FlashCard {
  id: number;
  frontText: string;
  backText: string;
  status: Status;
  nextSession: Date;
  correctAtRow: number;
}

export type Status = 'NEW' | 'LEARN' | 'OK';
