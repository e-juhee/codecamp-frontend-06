import * as S from "./Comments.style";
import { ICommentsItemUIProps, ICommentsUIProps } from "./Comments.types";
import { getDate } from "../../../../../commons/libraries/utils.js";
import CommentWrite from "../../write/comment/CommentWrite.container";
import { useState } from "react";
//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.

export default function CommentsItemUI(props: ICommentsItemUIProps) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickUpdate = () => {
    setIsEdit(true);
  };
  return (
    <>
      {!isEdit && (
        <S.CDetail
          key={props.el._id}
          id={props.el.writer}
          // onClick={props.onClickComment}
        >
          <S.CLeft>
            <S.CProfileImage></S.CProfileImage>
          </S.CLeft>
          <S.CMiddle>
            <S.CDetailHeader>
              <S.CWriter>{props.el.writer}</S.CWriter>
              <S.CStarWrapper>
                <S.CStar isStar={props.el.rating >= 1}></S.CStar>
                <S.CStar isStar={props.el.rating >= 2}></S.CStar>
                <S.CStar isStar={props.el.rating >= 3}></S.CStar>
                <S.CStar isStar={props.el.rating >= 4}></S.CStar>
                <S.CStar isStar={props.el.rating >= 5}></S.CStar>
              </S.CStarWrapper>
            </S.CDetailHeader>
            <S.CBody>
              <S.CContents>{props.el.contents}</S.CContents>
              <S.CDate>{getDate(props.el.createdAt)}</S.CDate>
            </S.CBody>
          </S.CMiddle>
          <S.CRight>
            <S.CUpdate id={props.el._id} onClick={onClickUpdate}></S.CUpdate>
            <S.CDelete
              id={props.el._id}
              onClick={props.onClickDelete}
            ></S.CDelete>
          </S.CRight>
        </S.CDetail>
      )}
      {isEdit && (
        <CommentWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          el={props.el}
          writer={props.el.writer}
        />
      )}
    </>
  );
}
