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
  const [commentId, setCommentId] = useState("");

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setCommentId(e.target.id);
    console.log(e.target.id); //이상해... 이상해 이상해!!
  };

  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onClickDelete = () => {
    // commentId = commentId;
    console.log("이벤트 실행: onClickDelete");
    console.log("commentId: " + commentId);
    console.log("password: " + password);
    try {
      // if (event.target instanceof Element)
      deleteBoardComment({
        variables: { password: password, boardCommentId: commentId },
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
      onToggleModal();
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
      commentId={commentId}
    />
  );
}
