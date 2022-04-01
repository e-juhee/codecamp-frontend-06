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
  const { data, fetchMore } = useQuery<
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

  /* 무한 스크롤 */
  const onLoadMore = () => {
    if (!data) return; // 처음에는 데이터는 undefined인데, 무한 스크롤은 존재함. 바로 실행이 되어버리면 이상하니까..

    fetchMore({
      variables: {
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
      }, // 다음 페이지(불러올 페이지)
      updateQuery: (prev, { fetchMoreResult }) => {
        // 위에 useQuery(FETCH_BOARDS) 해서 받은 10개를 수정하겠다는 뜻 (이전에 조회한거, 더 조회해서 받은 거)

        if (!fetchMoreResult?.fetchBoardComments)
          // 새로 조회해온 값이 없으면 기존 것으로 그냥 업데이트해줘
          return { fetchBoardComments: prev.fetchBoardComments };

        return {
          // 그 결과를 업데이트 해줘
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult?.fetchBoardComments,
          ], // 기존의 것과 추가로 받은 것을 합친다.
        };
      },
    });
  };

  return (
    <CommentsUI
      data={data}
      onClickDelete={onClickDelete}
      onChangePassword={onChangePassword}
      isOpen={isOpen}
      onToggleModal={onToggleModal}
      commentId={commentId}
      onLoadMore={onLoadMore}
    />
  );
}
