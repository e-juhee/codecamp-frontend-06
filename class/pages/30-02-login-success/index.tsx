import { gql, useQuery } from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;
export default function LoginSuccessPage() {
  // 인가가 이루어진다.
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다.</div>;
}
