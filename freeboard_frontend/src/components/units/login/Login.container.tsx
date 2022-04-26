import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import LoginUI from "./Login.presenter";
import { LOGIN_USER } from "./Login.queries";

export default function Login() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const emailTest = (email: string) => {
    return /^\w+@\w+\.\w{2,3}$/.test(email);
  };
  const passwordTest = (password: string) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (emailTest(e.target.value)) {
      setEmailErrorMessage("");
      setEmailValid(true);
    }
    setEmail(e.target.value);
    console.log(e.target.value);
    if (e.target.value && password) setIsActive(true);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (passwordTest(e.target.value)) {
      setPasswordErrorMessage("");
      setPasswordValid(true);
    }
    setPassword(e.target.value);
    if (e.target.value && email) setIsActive(true);
  };
  const onClickSaveID = () => {
    setIsChecked((prev) => !prev);
  };
  const onClickLogin = async () => {
    if (!emailTest(email)) {
      setEmailErrorMessage("이메일 주소를 정확히 입력해주세요.");
      setEmailValid(false);
      return;
    }
    if (!passwordTest(password)) {
      setPasswordErrorMessage(
        "영문, 숫자, 특수문자를 조합해서 입력해주세요. (8~16자)"
      );
      setPasswordValid(false);
      return;
    }
    const result = await loginUser({
      variables: { email, password },
    });
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    // localStorage.setItem("accessToken", accessToken);
    router.push("/boards");
  };

  return (
    <LoginUI
      isChecked={isChecked}
      emailValid={emailValid}
      passwordValid={passwordValid}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSaveID={onClickSaveID}
      onClickLogin={onClickLogin}
      isActive={isActive}
      inputRef={inputRef}
    />
  );
}
