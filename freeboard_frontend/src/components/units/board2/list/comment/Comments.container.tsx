import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./Comments.queries";
import CommentsUI from "./Comments.presenter";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

export default function Comments() {
  /*FETCH_BOARD_COMMENTS*/
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  /*DELETE_BOARD_COMMENT*/
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const onClickDelete = (event: MouseEvent<HTMLButtonElement>) => {
    let password = window.prompt("비밀번호를 입력해주세요.");
    try {
      if (event.target instanceof Element)
        deleteBoardComment({
          variables: { password: password, boardCommentId: event.target.id },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: String(router.query.boardId) },
            },
          ],
        });
      alert("삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      console.log("에러발생!!");
    }
  };

  return <CommentsUI data={data} onClickDelete={onClickDelete} />;
}
