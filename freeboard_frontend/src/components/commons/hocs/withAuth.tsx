/* 이게 원래 내 코드 */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";
// @ts-ignore
export const withAuth = (Component) => (props) => {
  const [accessToken] = useRecoilState(accessTokenState);
  // const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      getAccessToken().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용해주세요.");
          router.push("/login");
        }
      });
    }
  }, []);

  /* 글로벌 프로미스 방식 */
  // useEffect(() => {
  //   if (!accessToken) {
  //     restoreAccessToken.toPromise().then((newAccessToken) => {
  //       if (!newAccessToken) {
  //         alert("로그인 후 이용해주세요.");
  //         router.push("/login");
  //       }
  //     });
  //   }
  // }, []);

  return <Component {...props} />;
};
// Component가 화면에 실행된다.
// 결과는 똑같이 Component가 화면에 보이지만, 다른 점은 중간에 logic이 추가된 것이다.
