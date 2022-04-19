import { gql, useQuery } from "@apollo/client";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../../src/commons/types/generated/types";
import { useEffect, useState } from "react";
import { getDate } from "../../../src/commons/libraries/validation";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;
interface ITodayBoard {
  IBoard: IBoard;
  date: string;
}

export default function TodayPage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [todayView, setTodayView] = useState([]);
  const [isChange, setChange] = useState(false);
  useEffect(() => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    console.log(today);
    const temp = today.filter(
      (todayEl: ITodayBoard) => todayEl.date === getDate()
    );

    setTodayView(temp);
  }, [isChange]);

  const onClickAdd = (el: IBoard) => () => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    const temp = today.filter((todayEl: IBoard) => todayEl._id === el._id);
    if (temp.length) return;
    const { __typename, ...rest } = el;
    const withDateEl = { ...rest, date: getDate() };
    today.push(withDateEl);
    localStorage.setItem("today", JSON.stringify(today));
    setChange((prev) => !prev);
  };

  const onClickReset = () => {
    localStorage.setItem("today", "");
    setChange((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper>
        <S.Reset onClick={onClickReset}>오늘 본 목록 비우기</S.Reset>
        <S.BoardWrapper>
          <S.TopTitle>전체 게시글</S.TopTitle>

          <S.Header>
            <S.TitleLabel>제목</S.TitleLabel>
            <S.WriterLabel>작성자</S.WriterLabel>
          </S.Header>
          {data?.fetchBoards.map((el: IBoard) => (
            <S.Item onClick={onClickAdd(el)} key={uuidv4()}>
              <S.Title>{el.title}</S.Title>
              <S.Writer>{el.writer}</S.Writer>
            </S.Item>
          ))}
        </S.BoardWrapper>
        <S.BoardWrapper>
          <S.TopTitle>오늘 본 게시글</S.TopTitle>

          <S.Header>
            <S.TitleLabel>제목</S.TitleLabel>
            <S.WriterLabel>작성자</S.WriterLabel>
          </S.Header>
          {todayView.map((el: IBoard) => (
            <S.Item key={uuidv4()}>
              <S.Title>{el.title}</S.Title>
              <S.Writer>{el.writer}</S.Writer>
            </S.Item>
          ))}
        </S.BoardWrapper>
      </S.Wrapper>
    </>
  );
}
