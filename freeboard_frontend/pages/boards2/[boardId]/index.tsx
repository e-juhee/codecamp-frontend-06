/* FREEBOARD-DETAIL */
import { useRouter } from "next/router";
import BoardDetail from "../../../src/components/units/board2/detail/BoardDetail.container";
import Comments from "../../../src/components/units/board2/list/comment/Comments.container";
import CommentWrite from "../../../src/components/units/board2/write/comment/CommentWrite.container";
// import CommentWrite from "../../../src/components/units/board2/write/comment/write/CommentWrite.container";
export default function BoardsDetailPage() {
  const router = useRouter();
  const boardId = String(router.query.boardId);
  return (
    <>
      <BoardDetail />
      <CommentWrite />
      <Comments />
    </>
  );
}
