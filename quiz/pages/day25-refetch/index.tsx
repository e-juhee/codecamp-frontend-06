import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as S from "./style";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { register, handleSubmit, setFocus } = useForm();

  const onClickDelete = (boardId: string) => async () => {
    await deleteBoard({
      variables: { boardId },
      refetchQueries: [
        {
          query: FETCH_BOARDS,
        },
      ],
    });
  };

  const onClickSubmit = async (data) => {
    await createBoard({
      variables: {
        createBoardInput: { ...data },
      },
      refetchQueries: [
        {
          query: FETCH_BOARDS,
        },
      ],
    });
  };

  useEffect(() => {
    setFocus("writer");
  }, [setFocus]);

  return (
    <S.Wrapper>
      <S.LabelRow>
        <S.LabelTitle>제목</S.LabelTitle>
        <S.LabelContents>내용</S.LabelContents>
        <S.LabelWriter>작성자</S.LabelWriter>
      </S.LabelRow>
      {data?.fetchBoards.map((el: any) => (
        <S.Row key={el._id}>
          <S.Title>{el.title}</S.Title>
          <S.Contents>{el.contents}</S.Contents>
          <S.Writer>{el.writer}</S.Writer>
          <S.DeleteButton onClick={onClickDelete(el._id)}>X</S.DeleteButton>
        </S.Row>
      ))}
      <S.Form onSubmit={handleSubmit(onClickSubmit)}>
        <S.InputWrapper>
          <S.Label>작성자</S.Label>
          <S.ShortInput type="text" {...register("writer")} />
          <S.Label>비밀번호</S.Label>
          <S.ShortInput type="password" {...register("password")} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.TitleInput type="text" {...register("title")} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.ContentInput {...register("contents")} />
        </S.InputWrapper>
        <S.CreateButton>등록하기</S.CreateButton>
      </S.Form>
    </S.Wrapper>
  );
}
