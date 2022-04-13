import { useRouter } from "next/router";
import { useEffect } from "react";

// @ts-ignore
export const withAuth = (Component) => (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 화면으로 이동합니다.");
      router.push("/day23-hoc/login");
    }
  }, []);

  return <Component {...props} />;
};
