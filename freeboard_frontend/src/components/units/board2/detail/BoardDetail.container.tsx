import BoardDetailUI from "./BoardDetail.presenter"; // ./: 현위치에서
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./BoardDetail.queries";
import { IBoardDetailProps } from "./BoardDetail.types";

export default function BoardDetail(props: IBoardDetailProps) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) }, //폴더명
  });
  console.log(data);
  console.log(data?.fetchBoard._id);

  /*ToolTip show & hide*/
  const onClickToolTip = () => {
    let toolTipState: any = document.getElementById("toolTip");
    if (toolTipState.style.visibility === "visible") {
      toolTipState.style.visibility = "hidden";
    } else {
      toolTipState.style.visibility = "visible";
    }
  };

  /*LIKE_BOARD*/
  const [likeBoard] = useMutation(LIKE_BOARD);
  const onClickLike = async () => {
    try {
      const result = await likeBoard({
        variables: { boardId: router.query.boardId },
      });
      location.reload();
    } catch (error: any) {
      alert(error.message);
    }
  };

  /*DISLIKE_BOARD*/
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);
  const onClickDisLike = async () => {
    try {
      const result = await dislikeBoard({
        variables: { boardId: router.query.boardId },
      });
      location.reload();
    } catch (error: any) {
      alert(error.message);
    }
  };

  /*DELETE_BOARD*/
  const [deleteBoard] = useMutation(DELETE_BOARD);

  //event.target : 태그
  const onClickDelete = (event: any) => {
    // console.log(event.target.id)
    try {
      deleteBoard({
        variables: { boardId: event.target.id },
        // , refetchQueries: [{query:FETCH_BOARDS}]
      });
      alert("삭제되었습니다.");
      router.push(`/boards2`);
    } catch (error: any) {
      alert(error.message);
      console.log("에러발생!!");
    }
  };

  /*Routing to Boards */
  // const router = useRouter()
  const onClickList = () => {
    router.push(`/boards2`);
  };

  const onClickUpdate = () => {
    router.push(`/boards2/${router.query.boardId}/edit`);
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
      {/* <CommentWrite boardId={props.boardId} /> */}
    </>
  );
}
