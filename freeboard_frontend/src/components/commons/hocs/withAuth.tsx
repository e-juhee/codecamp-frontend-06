// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { getAccessToken } from "../../../commons/libraries/getAccessToken";
// import { accessTokenState } from "../../../commons/store";

// @ts-ignore

// export default function useAuth() {
//   const router = useRouter();
//   const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
//   useEffect(() => {
//     console.log(accessToken);
//     if (!accessToken) {
//       console.log("토큰없더");
//       // console.log(accessToken);
//       // Modal.error({ content: "로그인 후 이용 가능합니다." });
//       // router.push("/login");
//       /* accessToken 재발급 받아서 state에 넣어주기 */
//       getAccessToken()
//         .then((res) => {
//           setAccessToken(res);
//           console.log(res);
//         })
//         .catch((e) => {
//           console.log(e);
//           alert("로그인하셈");
//           router.push("/login");

//           // console.log(newAccessToken);
//         });
//     }
//   }, []);

//   return {};
// }

/* 이게 원래 내 코드 */
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { accessTokenState } from "../../../commons/store";
// @ts-ignore
export const withAuth = (Component) => (props) => {
  const [accessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  /* 권한 분기 */
  // useEffect(() => {
  //   if (!accessToken) {
  //     getAccessToken().then((newAccessToken) => {
  //       setAccessToken(newAccessToken);
  //       if (!newAccessToken) {
  //         // apolloSetting에서도 getAccessToken을 하고있어서 두번 요청이 가게 된다. 비효율적이다.
  //         alert("로그인 화면으로 이동합니다.");
  //         router.push("/login");
  //       }
  //     });
  //   }
  // }, []);

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

  return <Component {...props} />;
};
// Component가 화면에 실행된다.
// 결과는 똑같이 Component가 화면에 보이지만, 다른 점은 중간에 logic이 추가된 것이다.
