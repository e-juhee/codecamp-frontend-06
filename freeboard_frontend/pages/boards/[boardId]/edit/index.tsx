//수정하기 페이지
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      boardAddress {
        zipcode
      }
      boardAddress {
        address
      }
      boardAddress {
        addressDetail
      }
      createdAt
      updatedAt
      deletedAt
      __typename
    }
  }
`;
export default function BoardEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) }, //폴더명
  });

  return <BoardWrite isEdit={true} data={data} />;
}

// fetchBoard는 수정하기 화면에서만 실행되면 되기 때문에 이 화면에서 한다.
// Write Container에서 하면 등록하기 화면에도 들어가니까?!
