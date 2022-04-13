import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import LoginUI from "./Join.presenter";
import { CREATE_USER } from "./Join.queries";

const initialInputs = {
  name: "",
  email: "",
  password: "",
  checkPassword: "",
};

export default function Join() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputs, setInputs] = useState(initialInputs);
  const [errors, setErrors] = useState(initialInputs);
  const [isActive, setIsActive] = useState(false);
  const nameTest = /^[가-힣]+$/;
  const emailTest = /^\w+@\w+\.\w{2,3}$/;
  const passwordTest =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const [createUser] = useMutation(CREATE_USER);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const nameValid = nameTest.test(e.target.value);
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
    const emailValid = emailTest.test(e.target.value);
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
    const passwordValid = passwordTest.test(e.target.value);
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

  /* 가입하기 버튼 모달 */
  function countDown() {
    let secondsToGo = 3;
    const modal = Modal.success({
      title: "회원가입을 축하합니다!",
      content: `${secondsToGo}초 뒤에 메인으로 이동합니다.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `${secondsToGo}초 뒤에 로그인 화면으로 이동합니다.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
      router.push("/login");
    }, secondsToGo * 1000);
  }

  const onClickJoin = async () => {
    if (!nameTest.test(inputs.name)) {
      setErrors({ ...errors, name: "이름을 정확히 입력해주세요." });
      return;
    }
    if (!emailTest.test(inputs.email)) {
      setErrors({ ...errors, email: "이메일 주소를 정확히 입력해주세요." });
      return;
    }
    if (!passwordTest.test(inputs.password)) {
      setErrors({
        ...errors,
        password: "영문, 숫자, 특수문자를 조합해서 입력해주세요. (8~16자)",
      });
      return;
    }
    if (inputs.password !== inputs.checkPassword) {
      setErrors({ ...errors, checkPassword: "비밀번호를 다시 확인해주세요." });
      return;
    }
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: inputs.email,
            password: inputs.password,
            name: inputs.name,
          },
        },
      });
      console.log(result);
      countDown();
    } catch (e) {
      console.log(e);
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
