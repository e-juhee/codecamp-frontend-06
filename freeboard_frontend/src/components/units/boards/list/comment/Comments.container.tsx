import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./Comments.queries";
import CommentsUI from "./Comments.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import { Modal } from "antd";
import { successModal } from "../../../../../commons/libraries/utils";
import { checkPrimeSync } from "crypto";

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
  };

  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = (event: MouseEvent<HTMLImageElement>) => {
    setIsOpen((prev) => !prev);
    if (event.target instanceof Element) setCommentId(event?.target.id);
  };

  const onClickDelete = () => {
    try {
      deleteBoardComment({
        variables: { password: password, boardCommentId: commentId },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      successModal("삭제되었습니다.");
      setIsOpen(false);
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
