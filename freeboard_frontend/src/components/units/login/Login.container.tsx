import { ChangeEvent, useState } from "react";
// import { useRecoilState } from "recoil";
// import { emailErrorState, passwordErrorState } from "../../../commons/store";
import LoginUI from "./Login.presenter";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useRecoilState(emailErrorState);
  // const [passwordError, setPasswordError] = useRecoilState(passwordErrorState);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const valid = /^\w+@\w+\.\w{2,3}$/.test(e.target.value);
    if (valid) setEmailErrorMessage("");
    // if (valid) setEmailError(true);
    setEmail(e.target.value);
    console.log(e.target.value);
    if (e.target.value && password) setIsActive(true);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value)
      setPasswordErrorMessage(
        "영문, 숫자, 특수문자를 조합해서 입력해주세요. (8~16자)"
      );

    setPassword(e.target.value);
    if (e.target.value && email) setIsActive(true);
  };
  const onClickSaveID = () => {
    setIsChecked((prev) => !prev);
  };
  const onClickLogin = () => {
    const valid = /^\w+@\w+\.\w{2,3}$/.test(email);
    if (!valid) setEmailErrorMessage("이메일 주소를 정확히 입력해주세요.");
  };
  return (
    <LoginUI
      isChecked={isChecked}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickSaveID={onClickSaveID}
      onClickLogin={onClickLogin}
      isActive={isActive}
    />
  );
}
