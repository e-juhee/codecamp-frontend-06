import { gql, useQuery } from "@apollo/client";
import BasketItem from "./BasketItem.container";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../../src/commons/types/generated/types";
import { useEffect, useState } from "react";

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
  const [isAdded, setIsAdded] = useState(false);

  // useEffect(() => {
  //   const basket = JSON.parse(localStorage.getItem("basket") || "[]");
  //   const { __typename, ...rest } = props.el;
  //   basket.map((_, i) =>
  //     JSON.stringify(basket[i]) === JSON.stringify(rest)
  //       ? setIsAdded(true)
  //       : setIsAdded(false)
  //   );
  // }, []);

  return (
    <S.Wrapper>
      <S.TopTitle>게시글 목록</S.TopTitle>
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
