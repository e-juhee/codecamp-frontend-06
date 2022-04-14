/* FREEBOARD-NEW */
// 최종적으로 실행되는 페이지

import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import BoardWrite from "../../../src/components/units/board/write/BoardWrite.container";

function BoardsNewPage() {
  return <BoardWrite isEdit={false} />;
}
export default withAuth(BoardsNewPage);
