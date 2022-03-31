import { useMutation, useQuery } from "@apollo/client";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./Comments.queries";
import CommentsUI from "./Comments.presenter";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  successModal,
  warningModal,
} from "../../../../commons/libraries/utils";
import {
  IMutation,
  IMutationDeleteBoardCommentArgs,
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../../commons/types/generated/types";

export default function Comments() {
  /*FETCH_BOARD_COMMENTS*/
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  /*DELETE_BOARD_COMMENT*/
  const [deleteBoardComment] = useMutation<
    Pick<IMutation, "deleteBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);
  const [password, setPassword] = useState<string>("");
  const [commentId, setCommentId] = useState<string>("");

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggleModal = (event: MouseEvent<HTMLElement>) => {
    setIsOpen((prev) => !prev);
    if (event.target instanceof Element) setCommentId(event?.target.id);
  };

  const onClickDelete = async () => {
    try {
      await deleteBoardComment({
        variables: { password: password, boardCommentId: commentId },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      successModal("삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) warningModal(error.message);
    }
    setIsOpen(false);
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
