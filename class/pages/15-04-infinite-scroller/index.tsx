import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

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

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function MapBoardPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS); // fetchMore: 기존의 한 거를 추가로 더 fetch하겠다.

  const onLoadMore = () => {
    if (!data) return; // 처음에는 데이터는 undefined인데, 무한 스크롤은 존재함. 바로 실행이 되어버리면 이상하니까..
    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 }, // 다음 페이지(불러올 페이지)
      updateQuery: (prev, { fetchMoreResult }) => {
        // 위에 useQuery(FETCH_BOARDS) 해서 받은 10개를 수정하겠다는 뜻 (이전에 조회한거, 더 조회해서 받은 거)

        if (!fetchMoreResult.fetchBoards)
          // 새로 조회해온 값이 없으면 기존 것으로 그냥 업데이트해줘
          return { fetchBoards: prev.fetchBoards };

        return {
          // 그 결과를 업데이트 해줘
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards], // 기존의 것과 추가로 받은 것을 합친다.
        };
      },
    });
  };

  return (
    <InfiniteScroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el._id}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      )) || <div></div>}
    </InfiniteScroll>
  );
}
