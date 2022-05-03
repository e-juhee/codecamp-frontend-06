import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const accessTokenState = atom({
  key: "accessTokenSate",
  default: "",
});

// atom은 특정 데이터, selector는 기능이 들어갈 수 있다.
// 이 함수를 여러 컴포넌트에서 공유할 수 있게 된다. like 글로벌 함수!
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
