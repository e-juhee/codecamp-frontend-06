import BoardDetailUI from "./BoardDetail.presenter"; // ./: 현위치에서
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationDislikeBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { successModal } from "../../../../commons/libraries/utils";

export default function BoardDetail() {
  const router = useRouter();
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) }, // 폴더명
    }
  );

  /* ToolTip show & hide */
  const onClickToolTip = () => {
    const toolTipState: any = document.getElementById("toolTip");
    if (toolTipState?.style.visibility === "visible") {
      toolTipState.style.visibility = "hidden";
    } else {
      toolTipState.style.visibility = "visible";
    }
  };

  /* LIKE_BOARD */
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD); // 타입 추가하기!
  const onClickLike = async () => {
    try {
      likeBoard({
        variables: { boardId: String(router.query.boardId) },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
        ],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  /* DISLIKE_BOARD */
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationDislikeBoardArgs
  >(DISLIKE_BOARD);
  const onClickDisLike = async () => {
    try {
      dislikeBoard({
        variables: { boardId: String(router.query.boardId) },
        refetchQueries: [
          { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
        ],
      });
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  /* DELETE_BOARD */
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const onClickDelete = () => {
    try {
      deleteBoard({
        variables: { boardId: String(router.query.boardId) },
      });
      successModal("삭제되었습니다.");
      router.push(`/boards`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  const onClickList = () => {
    router.push(`/boards`);
  };

  const onClickUpdate = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        onClickToolTip={onClickToolTip}
        onClickLike={onClickLike}
        onClickDisLike={onClickDisLike}
        onClickDelete={onClickDelete}
        onClickList={onClickList}
        onClickUpdate={onClickUpdate}
      />
    </>
  );
}
