import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickButton = async () => {
    console.log(email, password);
    try {
      const result = await loginUser({
        variables: { email, password },
      });
      console.log(result);
      const accessToken = result?.data.loginUser.accessToken;
      console.log(accessToken);
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      console.log(accessToken);
      router.push("/day23-hoc/main");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <input type="text" onChange={onChangeEmail}></input>
      <input type="password" onChange={onChangePassword}></input>
      <button onClick={onClickButton}>로그인</button>
    </>
  );
}
