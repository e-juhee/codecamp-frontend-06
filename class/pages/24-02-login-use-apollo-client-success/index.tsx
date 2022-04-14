import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";

function LoginSuccessPage() {
  const [userInfo] = useRecoilState(userInfoState);
  return <div>{userInfo.name}님 환영합니다.</div>;
}

export default withAuth(LoginSuccessPage);
// withAuth가 실행된다.
// 매개변수인 Component에 LoginSuccessPage가 들어간다.
