/* FREEBOARD-DETAIL */
import { useRouter } from "next/router";
import BoardDetail from "../../../src/components/units/boards/detail/BoardDetail.container";
import Comments from "../../../src/components/units/boards/list/comment/Comments.container";
import CommentWrite from "../../../src/components/units/boards/write/comment/CommentWrite.container";
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
