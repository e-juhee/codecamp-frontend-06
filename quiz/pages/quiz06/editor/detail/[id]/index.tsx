import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import DOMPurify from "dompurify";
import * as S from "./styles";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      title
      writer
      contents
    }
  }
`;
export default function WebEditorDetailPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });

  return (
    <S.Wrapper>
      <S.Row>
        <S.Label>제목</S.Label>
        <S.Title>{data?.fetchBoard.title}</S.Title>
      </S.Row>
      <S.Row>
        <S.Label>작성자</S.Label>
        <S.Writer>{data?.fetchBoard.writer}</S.Writer>
      </S.Row>
      {typeof window !== "undefined" ? (
        <S.Contents
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data?.fetchBoard.contents),
          }}
        ></S.Contents>
      ) : (
        <S.Contents></S.Contents>
      )}
    </S.Wrapper>
  );
}
