import { useQuery, gql } from "@apollo/client";
import BoardCommentItem from "../../src/components/units/board/15-board-comment";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

export default function CommentEditPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((el: any, index: any) => (
        // 맵 안의 item을 하나의 컴포넌트로 따로 분리하면, 각각의 state를 생성해서 따로 관리할 수 있다.
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </>
  );
}
