import { useRouter } from "next/router";
import { useEffect } from "react";
// @ts-ignore
export const withAuth = (Component) => (props) => {
  const router = useRouter();

  /* 권한 분기 */
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 화면으로 이동합니다.");
      router.push("/login");
    }
  }, []);

  return <Component {...props} />;
};
// Component가 화면에 실행된다.
// 결과는 똑같이 Component가 화면에 보이지만, 다른 점은 중간에 logic이 추가된 것이다.
