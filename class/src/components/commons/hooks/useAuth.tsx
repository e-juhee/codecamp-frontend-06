import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();

  /* 권한 분기 */
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용이 가능합니다.");
      router.push("/23-04-login-check");
    }
  }, []);
}
