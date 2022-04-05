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
  /* FETCH_BOARD_COMMENTS */
  const router = useRouter();
  // refetch vs fetchMore: refetch는 기존의 것을 없애버리고 새로 가져오는 것. fetchMore는 기존 것을 유지한 상태로 추가로 가져오는 것
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
  });

  /* 무한 스크롤 */
  const onLoadMore = () => {
    if (!data) return; // 데이터가 없으면 실행하지 않는다. (처음에는 데이터가 undefined인데, 무한 스크롤이 실행이 되어버린다.)

    fetchMore({
      variables: {
        // 다음 페이지(불러올 페이지) : 기존에 받아온 data에서  길이를 가져와서 활용한다.
        page: Math.ceil(data.fetchBoardComments.length / 10) + 1,
      },

      // useQuery로 받아온 data를 update한다.
      updateQuery: (prev, { fetchMoreResult }) => {
        // prev: 기존의 data
        // {fetchMoreResult} : 추가로 요청해서 받아온 내용

        // 새로 조회해온 값이 없으면 기존 것으로 그냥 업데이트한다.
        if (!fetchMoreResult?.fetchBoardComments)
          return { fetchBoardComments: prev.fetchBoardComments };

        // 가져온 내용으로 return (update한다.)
        return {
          // 기존의 것과 추가로 받은 것을 합친다.
          fetchBoardComments: [
            ...prev.fetchBoardComments,
            ...fetchMoreResult.fetchBoardComments,
          ],
        };
      },
    });
  };

  /* DELETE_BOARD_COMMENT */
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
      onLoadMore={onLoadMore}
    />
  );
}
