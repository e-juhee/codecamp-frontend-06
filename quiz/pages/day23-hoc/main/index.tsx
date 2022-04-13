import { gql, useQuery } from "@apollo/client";
import { withAuth } from "../../../src/components/commons/day23-hoc/with.Auth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function MainPage() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <>
      <h1>메인 화면입니다.</h1>
      <div>{data?.fetchUserLoggedIn.name}님</div>
    </>
  );
}
export default withAuth(MainPage);
