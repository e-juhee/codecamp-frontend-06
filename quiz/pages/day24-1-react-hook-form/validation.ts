import * as yup from "yup";

export const schema = yup.object({
  writer: yup
    .string()
    .required("이름을 입력해주세요.")
    .max(5, "5글자 이내로 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .max(8, "8자 이내로 입력해주세요.")
    .matches(
      /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W))(?=.*[!@#$%^*+=-])$/,
      "영문, 숫자, 특수문자를 포함해야 합니다."
    ),
  title: yup
    .string()
    .required("제목을 입력해주세요.")
    .max(100, "100글자 이내로 입력해주세요."),
  contents: yup
    .string()
    .required("내용을 입력해주세요.")
    .max(1000, "1000글자 이내로 입력해주세요."),
});
