import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../src/commons/store";
import { TopTitle } from "../../basket/styles";
import * as S from "./styles";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onClickLogin = async () => {
    const result = await loginUser({
      variables: { email, password },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    alert("로그인에 성공하였습니다.");
    router.push("./loading");
  };

  return (
    <S.Wrapper>
      <S.TopTitle>로그인</S.TopTitle>
      <S.InputWrapper>
        <S.Label>이메일</S.Label>
        <S.Input type="text" onChange={onChangeEmail} defaultValue="aa@a.com" />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>비밀번호</S.Label>
        <S.Input
          type="password"
          onChange={onChangePassword}
          defaultValue="ab12345!"
        />
      </S.InputWrapper>

      <S.Button onClick={onClickLogin}>로그인</S.Button>
    </S.Wrapper>
  );
}
