import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false, // useState할 때 초기값을 줬던것처럼 여기도 초기값을 지정
});
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});
export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});
