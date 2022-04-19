import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// prettier-ignore
export const withAuth = (Component : ComponentType) => <P extends {}>(props:P) => {
  const router = useRouter();

  /* 권한 분기 */
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용이 가능합니다.");
      router.push("/23-04-login-check");
    }
  }, []);

  return <Component {...props} /> ;
}
// Component가 화면에 실행된다.
// 결과는 똑같이 Component가 화면에 보이지만, 다른 점은 중간에 logic이 추가된 것이다.
