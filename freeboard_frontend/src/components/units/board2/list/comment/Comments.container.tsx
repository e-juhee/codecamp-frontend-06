import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./Comments.queries";
import CommentsUI from "./Comments.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";

export default function Comments() {
  /*FETCH_BOARD_COMMENTS*/
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  /*DELETE_BOARD_COMMENT*/
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const [password, setPassword] = useState("");
  const [commentId2, setCommentId2] = useState("");

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setCommentId2(e.target.id);
    console.log(e.target.id);
  };

  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickDelete = () => {
    // commentId = commentId;
    console.log("이벤트 실행: onClickDelete");
    console.log("commentId: " + commentId2);
    console.log("password: " + password);
    try {
      // if (event.target instanceof Element)
      deleteBoardComment({
        variables: { password: password, boardCommentId: commentId2 },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      Modal.success({
        content: "삭제되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <CommentsUI
      data={data}
      onClickDelete={onClickDelete}
      onChangePassword={onChangePassword}
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      commentId={commentId2}
    />
  );
}
