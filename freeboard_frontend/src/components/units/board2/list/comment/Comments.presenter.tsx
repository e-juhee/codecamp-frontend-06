import * as S from "./Comments.style";
import { ICommentsUIProps } from "./Comments.types";
import { getDate } from "../../../../../commons/libraries/utils.js";
//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.

export default function CommentsUI(props: ICommentsUIProps) {
  return (
    <>
      <S.CListWrapper>
        {props.data?.fetchBoardComments.map((el: any) => (
          <S.CDetail key={el._id}>
            <S.CLeft>
              <S.CProfileImage></S.CProfileImage>
            </S.CLeft>
            <S.CMiddle>
              <S.CDetailHeader>
                <S.CWriter>{el.writer}</S.CWriter>
                <S.CStarWrapper>
                  <S.CStar isStar={el.rating >= 1}></S.CStar>
                  <S.CStar isStar={el.rating >= 2}></S.CStar>
                  <S.CStar isStar={el.rating >= 3}></S.CStar>
                  <S.CStar isStar={el.rating >= 4}></S.CStar>
                  <S.CStar isStar={el.rating >= 5}></S.CStar>
                </S.CStarWrapper>
              </S.CDetailHeader>
              <S.CBody>
                <S.CContents>{el.contents}</S.CContents>
                <S.CDate>{getDate(el.createdAt)}</S.CDate>
              </S.CBody>
            </S.CMiddle>
            <S.CRight>
              <S.CUpdate></S.CUpdate>
              <S.CDelete></S.CDelete>
            </S.CRight>
          </S.CDetail>
        ))}
      </S.CListWrapper>
    </>
  );
}
