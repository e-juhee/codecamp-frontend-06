import * as S from "./Comments.style";
import { ICommentsUIProps } from "./Comments.types";
import CommentsItemUI from "./Comments.presenterItem";
import { MouseEvent, useState } from "react";

//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.

export default function CommentsUI(props: ICommentsUIProps) {
  return (
    <>
      <S.CListWrapper>
        {props.data?.fetchBoardComments.map((el: any, index: any) => (
          <CommentsItemUI
            key={el._id}
            el={el}
            data={props.data}
            onToggleModal={props.onToggleModal}
            onClickDelete={props.onClickDelete}
            isOpen={props.isOpen}
            onChangePassword={props.onChangePassword}
            index={index}
          />
        ))}
      </S.CListWrapper>
    </>
  );
}
