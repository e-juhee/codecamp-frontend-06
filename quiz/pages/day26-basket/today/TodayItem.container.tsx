import { IBoard } from "../../../src/commons/types/generated/types";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import { getDate } from "../../../src/commons/libraries/validation";

interface IProps {
  el: IBoard;
  // onClickAdd: (el: IBoard) => (e: MouseEvent<HTMLButtonElement>) => void;
}
export default function TodayItem(props: IProps) {
  const onClickAdd = (el: IBoard) => () => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    const temp = today.filter((todayEl: IBoard) => todayEl._id === el._id);
    if (temp.length) return;
    const { __typename, ...rest } = el;
    const withDateEl = { ...rest, date: getDate() };
    today.push(withDateEl);
    localStorage.setItem("today", JSON.stringify(today));
  };

  return (
    <S.Item onClick={onClickAdd(props.el)} key={uuidv4()}>
      <S.Title>{props.el.title}</S.Title>
      <S.Writer>{props.el.writer}</S.Writer>
    </S.Item>
  );
}
