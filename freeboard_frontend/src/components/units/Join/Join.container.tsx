import { ChangeEvent, useState, useRef, useEffect } from "react";
import LoginUI from "./Join.presenter";

const initialInputs = {
  name: "",
  email: "",
  password: "",
  checkPassword: "",
};

export default function Join() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState(initialInputs);
  const [errors, setErrors] = useState(initialInputs);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const nameValid = /^[가-힣]+$/.test(e.target.value);
    if (nameValid) {
      setErrors({ ...errors, name: "" });
    }
    setInputs({ ...inputs, name: e.target.value });
    if (
      e.target.value &&
      inputs.email &&
      inputs.password &&
      inputs.checkPassword
    )
      setIsActive(true);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const emailValid = /^\w+@\w+\.\w{2,3}$/.test(e.target.value);
    if (emailValid) {
      setErrors({ ...errors, email: "" });
    }
    setInputs({ ...inputs, email: e.target.value });
    console.log(e.target.value);
    if (
      inputs.name &&
      inputs.password &&
      inputs.checkPassword &&
      e.target.value
    )
      setIsActive(true);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const passwordValid =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        e.target.value
      );
    if (passwordValid) {
      setErrors({ ...errors, password: "" });
    }
    setInputs({ ...inputs, password: e.target.value });

    if (inputs.name && inputs.email && inputs.checkPassword && e.target.value)
      setIsActive(true);
  };
  const onChangeCheckPassword = (e: ChangeEvent<HTMLInputElement>) => {
    if (inputs.password === e.target.value) {
      setErrors({ ...errors, checkPassword: "" });
    }
    setInputs({ ...inputs, checkPassword: e.target.value });

    if (inputs.name && inputs.password && inputs.email && e.target.value)
      setIsActive(true);
  };

  const onClickJoin = () => {
    const nameValid = /^[가-힣]+$/.test(inputs.name);
    if (!nameValid) {
      setErrors({ ...errors, name: "이름을 정확히 입력해주세요." });
      return;
    }
    const emailValid = /^\w+@\w+\.\w{2,3}$/.test(inputs.email);
    if (!emailValid) {
      setErrors({ ...errors, email: "이메일 주소를 정확히 입력해주세요." });
      return;
    }
    const passwordValid =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        inputs.password
      );
    if (!passwordValid) {
      setErrors({
        ...errors,
        password: "영문, 숫자, 특수문자를 조합해서 입력해주세요. (8~16자)",
      });
      return;
    }
    if (inputs.password !== inputs.checkPassword) {
      setErrors({
        ...errors,
        checkPassword: "비밀번호를 다시 확인해주세요.",
      });
    }
  };
  return (
    <LoginUI
      errors={errors}
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
