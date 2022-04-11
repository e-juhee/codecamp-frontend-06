import { atom } from "recoil";

export const emailErrorState = atom({
  key: "emailErrorState",
  default: false,
});
export const passwordErrorState = atom({
  key: "passwordErrorState",
  default: false,
});
