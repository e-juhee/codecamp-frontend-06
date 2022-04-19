import { IBoard } from "../../../src/commons/types/generated/types";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

interface IProps {
  el: IBoard;
  // onClickAdd: (el: IBoard) => (e: MouseEvent<HTMLButtonElement>) => void;
}
export default function BasketItem(props: IProps) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickAdd = (el: IBoard) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const temp = basket.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length) {
      alert("이미 담긴 게시글입니다.");
      return;
    }
    const { __typename, ...rest } = el;
    basket.push(rest);
    localStorage.setItem("basket", JSON.stringify(basket));
    setIsAdded(true);
  };

  const onClickDelete = (el: IBoard) => () => {
    const basket = JSON.parse(localStorage.getItem("basket") || "[]");
    const temp = basket.filter((basketEl: IBoard) => basketEl._id !== el._id);
    localStorage.setItem("basket", JSON.stringify(temp));
    setIsAdded(false);
  };

  return (
    <S.Item key={uuidv4()}>
      <S.Title>{props.el.title}</S.Title>
      <S.Writer>{props.el.writer}</S.Writer>
      <S.Button
        onClick={isAdded ? onClickDelete(props.el) : onClickAdd(props.el)}
        isAdded={isAdded}
      >
        {isAdded ? "담기 취소" : "게시물 담기"}
      </S.Button>
    </S.Item>
  );
}
