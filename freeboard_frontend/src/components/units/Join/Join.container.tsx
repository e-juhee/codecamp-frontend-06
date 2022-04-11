import { ChangeEvent, useState, useRef, useEffect } from "react";
import LoginUI from "./Join.presenter";

export default function Join() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [checkPasswordValid, setCheckPasswordValid] = useState(true);
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [checkPasswordErrorMessage, setCheckPasswordErrorMessage] =
    useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const nameValid = /^[가-힣]+$/.test(name);
    if (nameValid) {
      setNameErrorMessage("");
      setNameValid(true);
    }
    setName(e.target.value);
    if (e.target.value && email && password && checkPassword) setIsActive(true);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailValid = /^\w+@\w+\.\w{2,3}$/.test(email);
    if (emailValid) {
      setEmailErrorMessage("");
      setEmailValid(true);
    }
    setEmail(e.target.value);
    console.log(e.target.value);
    if (name && e.target.value && password && checkPassword) setIsActive(true);
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
    if (name && e.target.value && email && checkPassword) setIsActive(true);
  };
  const onChangeCheckPassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (password !== e.target.value) {
      setCheckPasswordErrorMessage("");
      setCheckPasswordValid(true);
    }
    setCheckPassword(e.target.value);
    if (name && e.target.value && email && password) setIsActive(true);
  };

  const onClickLogin = () => {
    const nameValid = /^[가-힣]+$/.test(name);
    if (!nameValid) {
      setNameErrorMessage("이름을 정확히 입력해주세요.");
      setNameValid(false);
      return;
    }
    const emailValid = /^\w+@\w+\.\w{2,3}$/.test(email);
    if (!emailValid) {
      setEmailErrorMessage("이메일 주소를 정확히 입력해주세요.");
      setEmailValid(false);
      return;
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
      return;
    }

    if (password !== checkPassword) {
      setCheckPasswordErrorMessage("비밀번호를 다시 확인해주세요.");
      setCheckPasswordValid(false);
    }
  };
  return (
    <LoginUI
      nameValid={nameValid}
      emailValid={emailValid}
      passwordValid={passwordValid}
      checkPasswordValid={checkPasswordValid}
      nameErrorMessage={nameErrorMessage}
      emailErrorMessage={emailErrorMessage}
      passwordErrorMessage={passwordErrorMessage}
      checkPasswordErrorMessage={checkPasswordErrorMessage}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onClickLogin={onClickLogin}
      isActive={isActive}
      inputRef={inputRef}
    />
  );
}
