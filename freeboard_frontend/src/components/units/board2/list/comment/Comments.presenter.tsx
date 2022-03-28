import * as S from "./Comments.style";
import { ICommentsUIProps } from "./Comments.types";
import CommentsItemUI from "./Comments.presenterItem";
import { MouseEvent } from "react";
//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.

export default function CommentsUI(props: ICommentsUIProps) {
  const onClickComment = (event: MouseEvent<HTMLDivElement>) => {
    alert(event.currentTarget.id + "님이 작성한 글입니다.");
    console.log("onClickComment");
    console.log(event.target);
  };

  return (
    <>
      <S.CListWrapper>
        {props.data?.fetchBoardComments.map((el: any) => (
          <CommentsItemUI
            onClickComment={onClickComment}
            key={el._id}
            el={el}
            data={props.data}
            onClickDelete={props.onClickDelete}
          />
        ))}
      </S.CListWrapper>
    </>
  );
}
