import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
function LoginSuccessPage() {
  // const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // useEffect(() => {
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용이 가능합니다.");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>;
}

export default withAuth(LoginSuccessPage);
// withAuth가 실행된다.
// 매개변수인 Component에 LoginSuccessPage가 들어간다.
