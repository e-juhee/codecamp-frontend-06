import { gql, useQuery } from "@apollo/client";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import { IBoard } from "../../../src/commons/types/generated/types";
import TodayItem from "./TodayItem.container";
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
  useEffect(() => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    console.log(today);
    const temp = today.filter(
      (todayEl: ITodayBoard) => todayEl.date === getDate()
    );

    setTodayView(temp);
  }, []);

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.TitleLabel>제목</S.TitleLabel>
          <S.WriterLabel>작성자</S.WriterLabel>
        </S.Header>
        {data?.fetchBoards.map((el: IBoard) => (
          <TodayItem key={uuidv4()} el={el} />
        ))}
      </S.Wrapper>
      <h1>오늘 본 게시글</h1>
      <S.Wrapper>
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
      </S.Wrapper>
    </>
  );
}
