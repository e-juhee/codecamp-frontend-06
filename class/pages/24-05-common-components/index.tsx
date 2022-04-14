import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

const Error = styled.div`
  color: red;
  font-size: 9px;
`;

// 아래 schema는 컴포넌트 분리 시 .validation.ts라는 파일로 보관하기
const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."), // email 형식 조건이 내장되어있다.
  password: yup
    .string()
    .required("비밀번호는 필수 입력 사항입니다.")
    .min(4, "비밀번호는 최소 4자리 이상 입력해주세요.")
    .max(15, "비밀번호는 최대 15자리 이내로 입력해주세요."),
});
interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // onChange를 추가하면 버튼을 누르기 전에도 검증한다.
  });

  // handleSubmit : onClickSubmit 함수가 실행될 때 입력한 스테이트들의 데이터를 넣어주게 된다. data를 받아서 사용할 수 있다.
  // 버튼이 눌리면 실행된다.
  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 이메일: <input type="text" {...register("email")} /> */}
      이메일: <Input01 type="text" register={register("email")} />
      <Error style={{ color: "red" }}>{formState.errors.email?.message}</Error>
      <br />
      {/* 비밀번호: <input type="password" {...register("password")} /> */}
      비밀번호: <Input01 type="password" register={register("password")} />
      <br />
      <Error style={{ color: "red" }}>
        {formState.errors.password?.message}
      </Error>
      {/* <LoginButton isActive={formState.isValid}>로그인</LoginButton> */}
      <Button01 isActive={formState.isValid} title="로그인하기" />
    </form>
  );
}
