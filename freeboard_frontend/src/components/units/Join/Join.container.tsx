import { ChangeEvent, useState, useRef, useEffect } from "react";
import LoginUI from "./Join.presenter";

// const initialInputs = {
//   name: "",
//   email: "",
//   password: "",
//   checkPassword: "",
// };

export default function Join() {
  const inputRef = useRef<HTMLInputElement>(null);
  // const [inputs, setInputs] = useState(initialInputs);
  // const [valid, setValids] = useState( name: "",
  // email: "",
  // password: "",
  // checkPassword: "",);
  // const [errors, setErrors] = useState(initialInputs);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordErrorMessage] = useState("");
  const [checkPasswordError, setCheckPasswordError] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const nameValid = /^[가-힣]+$/.test(name);
    if (nameValid) {
      setNameError("");
      // setNameValid(true);
    }
    setName(e.target.value);
    if (e.target.value && email && password && checkPassword) setIsActive(true);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailValid = /^\w+@\w+\.\w{2,3}$/.test(email);
    if (emailValid) {
      setEmailError("");
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
    }
    setPassword(e.target.value);
    if (name && e.target.value && email && checkPassword) setIsActive(true);
  };
  const onChangeCheckPassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (password === e.target.value) {
      setCheckPasswordError("");
    }
    setCheckPassword(e.target.value);
    if (name && e.target.value && email && password) setIsActive(true);
  };

  const onClickJoin = () => {
    const nameValid = /^[가-힣]+$/.test(name);
    if (!nameValid) {
      setNameError("이름을 정확히 입력해주세요.");
      return;
    }
    const emailValid = /^\w+@\w+\.\w{2,3}$/.test(email);
    if (!emailValid) {
      setEmailError("이메일 주소를 정확히 입력해주세요.");
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
      return;
    }

    if (password !== checkPassword) {
      setCheckPasswordError("비밀번호를 다시 확인해주세요.");
    }
  };
  return (
    <LoginUI
      // nameValid={nameValid}
      // emailValid={emailValid}
      // passwordValid={passwordValid}
      // checkPasswordValid={checkPasswordValid}
      nameError={nameError}
      emailError={emailError}
      passwordError={passwordError}
      checkPasswordError={checkPasswordError}
      onChangeName={onChangeName}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onClickJoin={onClickJoin}
      isActive={isActive}
      inputRef={inputRef}
    />
  );
}
