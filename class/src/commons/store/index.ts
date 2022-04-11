import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false, // useState할 때 초기값을 줬던것처럼 여기도 초기값을 지정
});
