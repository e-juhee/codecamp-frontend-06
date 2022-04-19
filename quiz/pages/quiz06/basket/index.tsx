import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";
import * as S from "./styles";

export default function BasketPage() {
  const router = useRouter();
  const [basketItems, setBasketItems] = useState([]);
  const [isChange, setChange] = useState(false);

  useEffect(() => {
    const baskets = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasketItems(baskets);
  }, [isChange]);
  const onClickReset = () => {
    localStorage.setItem("basket", "");
    setChange((prev) => !prev);
  };
  const onClickBoards = () => {
    router.push("./boards");
  };
  return (
    <>
      <S.Wrapper>
        <S.ButtonWrapper>
          <S.Reset onClick={onClickReset}>장바구니 비우기</S.Reset>
          <S.Reset onClick={onClickBoards}>게시글 목록으로 이동</S.Reset>
        </S.ButtonWrapper>
        <S.BoardWrapper>
          <S.TopTitle>장바구니</S.TopTitle>
          <S.Header>
            <S.TitleLabel>제목</S.TitleLabel>
            <S.WriterLabel>작성자</S.WriterLabel>
          </S.Header>
          {basketItems.map((el: IBoard) => (
            <S.Item key={el._id}>
              <S.Title>{el.title}</S.Title>
              <S.Writer>{el.writer}</S.Writer>
            </S.Item>
          ))}
        </S.BoardWrapper>
      </S.Wrapper>
    </>
  );
}
