import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import * as S from "./styles";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // ssr: server side rendering -> false로 하면 client-side(브라우저)에서만 그리게 된다.

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;

export default function WebEditorPage() {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);

  const { register, handleSubmit, setValue, trigger } = useForm({
    mode: "onChange",
  });
  const onChangeContents = (value: string) => {
    // event가 들어오는 것이 아니다. html의 속성이 아닌 ReactQuill의 속성이기 때문이다. value가 바로 들어온다.
    console.log(value);
    setValue("contents", value === "<p><br></p>" ? "" : value); // setValue를 사용하면 register로 등록하지 않고 강제로 값을 넣어줄 수 있다.

    // onChange가 됐다고 react-hook-form에 알려주는 기능
    trigger("contents");
  };
  const onClickSubmit = async (data: any) => {
    if (!(data.writer && data.password && data.title && data.contents)) {
      alert("모두 입력해주세요.");
      return;
    }
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer: data.writer,
            password: data.password,
            title: data.title,
            contents: data.contents,
          },
        },
      });
      router.push(`./detail/${result.data.createBoard._id}`);
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onClickSubmit)}>
        <S.InputWrapper>
          <S.Label>제목 *</S.Label>
          <S.Input
            type="text"
            {...register("title")}
            placeholder="제목을 입력해주세요."
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>작성자 *</S.Label>
          <S.ShortInput type="text" {...register("writer")} />
          <S.Label>비밀번호 *</S.Label>

          <S.ShortInput type="password" {...register("password")} />
        </S.InputWrapper>
        <S.InputWrapper>
          <ReactQuill
            onChange={onChangeContents}
            style={{ width: "100%", height: "300px" }}
          />
        </S.InputWrapper>
        <S.Button>등록하기</S.Button>
      </S.Form>
    </S.Wrapper>
  );
}
