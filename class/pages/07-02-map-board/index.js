import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data } = useQuery(FETCH_BOARDS);

  // console.log(data)

  return (
    <>
      {data?.fetchBoards.map(
        (
          el // 인자로 index를 써서 사용할 수 있음: 순서, 필요 없으면 안 써도 됨
        ) => (
          <MyRow key={el.number}>
            <MyColumn>
              <input type="checkbox" />
            </MyColumn>
            <MyColumn>{el.number}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
          </MyRow>
        )
      )}
    </>
  );
}
