import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import Input01 from "../../src/commons/inputs/01";
import Button01 from "../../src/commons/buttons/01";
import * as S from "./style";
import { schema } from "./validation";
import { CREATE_BOARD } from "./query";

interface IFormValues {
  writer?: string;
  password?: string;
  title?: string;
  contents?: string;
}
export default function ReactHookFormPage() {
  const [createBoard] = useMutation(CREATE_BOARD);
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmitButton = async (data: IFormValues) => {
    try {
      const result = await createBoard({
        variables: { createBoardInput: { ...data } },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <S.Form onSubmit={handleSubmit(onClickSubmitButton)}>
      <S.Item>
        <S.Label>작성자</S.Label>
        <S.InputWrapper>
          <Input01
            type="text"
            register={register("writer")}
            placeholder="작성자를 입력해주세요."
          ></Input01>
          <S.Error>{formState.errors.writer?.message}</S.Error>
        </S.InputWrapper>
      </S.Item>
      <S.Item>
        <S.Label>비밀번호</S.Label>
        <S.InputWrapper>
          <Input01 type="password" register={register("password")}></Input01>
          <S.Error>{formState.errors.password?.message}</S.Error>
        </S.InputWrapper>
      </S.Item>
      <S.Item>
        <S.Label>제목</S.Label>{" "}
        <S.InputWrapper>
          <Input01 type="text" register={register("title")}></Input01>
          <S.Error>{formState.errors.title?.message}</S.Error>
        </S.InputWrapper>
      </S.Item>
      <S.Item>
        <S.Label>내용</S.Label>{" "}
        <S.InputWrapper>
          <Input01 type="text" register={register("contents")}></Input01>
          <S.Error>{formState.errors.contents?.message}</S.Error>
        </S.InputWrapper>
      </S.Item>
      <Button01 title="등록하기"></Button01>
    </S.Form>
  );
}
