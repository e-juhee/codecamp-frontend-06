import { gql, useQuery } from "@apollo/client";
import Board from "../../src/components/units/board/pagination/Board";
import Pagination from "../../src/components/units/board/pagination/Pagination";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
export default function PaginationPage() {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <>
      <Board data={data} />
      <Pagination refetch={refetch} lastPage={lastPage} />
    </>
  );
}
