import { ChangeEvent, useState, useRef, useEffect } from "react";
import LoginUI from "./Login.presenter";

export default function Login() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailValid = /^\w+@\w+\.\w{2,3}$/.test(email);
    if (emailValid) {
      setEmailErrorMessage("");
      setEmailValid(true);
    }
    setEmail(e.target.value);
    console.log(e.target.value);
    if (e.target.value && password) setIsActive(true);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordValid =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        e.target.value
      );
    if (passwordValid) {
      setPasswordErrorMessage("");
      setPasswordValid(true);
    }
    setPassword(e.target.value);
    if (e.target.value && email) setIsActive(true);
  };
  const onClickSaveID = () => {
    setIsChecked((prev) => !prev);
  };
  const onClickLogin = () => {
    const emailValid = /^\w+@\w+\.\w{2,3}$/.test(email);
    if (!emailValid) {
      setEmailErrorMessage("이메일 주소를 정확히 입력해주세요.");
      setEmailValid(false);
    }
    const passwordValid =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      );
    if (!passwordValid) {
      setPasswordErrorMessage(
        "영문, 숫자, 특수문자를 조합해서 입력해주세요. (8~16자)"
      );
      setPasswordValid(false);
    }
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
