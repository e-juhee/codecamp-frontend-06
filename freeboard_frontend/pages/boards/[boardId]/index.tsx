/* FREEBOARD-DETAIL */
import { useRouter } from "next/router";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import Comments from "../../../src/components/units/boardComment/list/Comments.container";
import CommentWrite from "../../../src/components/units/boardComment/write/CommentWrite.container";
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
