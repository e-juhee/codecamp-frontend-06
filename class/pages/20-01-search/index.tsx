import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { ChangeEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
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
  const [search, setSearch] = useState("");

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onClickSearch = () => {
    refetch({ search, page: 1 });
  };

  const onClickPage = (e: any) => {
    refetch({ page: Number(e.target.id) });
  };

  return (
    <>
      검색어 입력: <input type="text" onChange={onChangeSearch} />
      <button onClick={onClickSearch}>검색하기</button>
      {data?.fetchBoards.map(
        (
          el // 인자로 index를 써서 사용할 수 있음: 순서, 필요 없으면 안 써도 됨
        ) => (
          <MyRow key={el._id}>
            <MyColumn>{el.title}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
          </MyRow>
        )
      )}
      {new Array(10).fill(1).map((_, index) => (
        <span onClick={onClickPage} id={String(index + 1)} key={index + 1}>
          {index + 1}
        </span>
      ))}
    </>
  );
}
