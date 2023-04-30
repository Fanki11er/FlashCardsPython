export type Status = "Loading" | "Error" | "Ready" | "";

export type User = {
  username: string;
};
export type TokenDto = {
  refresh: string;
  access: string;
};
