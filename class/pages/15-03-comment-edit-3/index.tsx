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
  // const [myIndex, setMyIndex] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);
  const { data } = useQuery(FETCH_BOARDS);

  // const onClickEdit = (event: any) => {
  //   const aaa = myIndex;
  //   aaa[event.target.id] = true; // 여기서 이미 바뀜
  //   console.log(aaa);
  //   // setMyIndex(aaa); // 기존 값과 현재 값이 다를 때만 작동한다.
  //   setMyIndex([...aaa]); // 기존 값과 현재 값이 다를 때만 작동한다.
  // };

  return (
    <>
      {data?.fetchBoards.map((el: any, index: any) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </>
  );
}
