import { gql, useQuery } from "@apollo/client";
import BasketItem from "./BasketItem.container";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleLabel>제목</S.TitleLabel>
        <S.WriterLabel>작성자</S.WriterLabel>
      </S.Header>
      {data?.fetchBoards.map((el: IBoard) => (
        <BasketItem key={uuidv4()} el={el} />
      ))}
    </S.Wrapper>
  );
}
