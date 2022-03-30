import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 1200px;
  margin: 0px auto;
`;
const Title = styled.div`
  font-size: 28px;
  font-family: "GmarketSansTTFBold";
  cursor: pointer;
`;
const LoginWrapper = styled.div``;
const Login = styled.button`
  width: 92px;
  height: 44px;
  font-weight: 700;
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
const SignUp = styled.button`
  width: 92px;
  height: 44px;
  font-weight: 500;
  font-size: 16px;
  background: pink;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export default function LayoutHeader() {
  const router = useRouter();
  const onClickTitle = () => {
    router.push("/boards2");
  };
  return (
    <Wrapper>
      <Title onClick={onClickTitle}>G보드</Title>
      <LoginWrapper>
        <Login>Login</Login>
        <SignUp>Sign up</SignUp>
      </LoginWrapper>
    </Wrapper>
  );
}
