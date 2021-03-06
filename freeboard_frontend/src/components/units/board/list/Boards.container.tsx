import BoardsUI from "./Boards.presenter"; // ./: 현위치에서
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_BEST,
  FETCH_BOARDS_COUNT,
} from "./Boards.queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";

export default function Boards() {
  /* FETCH_BOARDS */
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS); // data는 state와 동일한 역할을 한다. 값이 바뀌면 리렌더된다.

  const [search, setSearch] = useState<string>("");
  const [keyword, setKeyword] = useState("");

  const getDebounce = _.debounce((search) => {
    // data: event.target.value
    // 0.2초 동안 재작업이 없으면 실행되는 부분
    setKeyword(search);
    setSearch(search);
    refetch({ search: search, page: 1 }); // 바로 실행되지 않고, 0.2초 동안 재입력이 일어나지 않으면 그 때 리페치가 실행된다.
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // const onClickSearch = (event: MouseEvent<HTMLButtonElement>) => {
  //   refetch();
  //   refetch({ search: search });
  // };

  /* FETCH_BOARDS_BEST */
  const { data: dataBest } = useQuery(FETCH_BOARDS_BEST);

  /* Routing to BoardWrite */
  const router = useRouter();
  const onClickWrite = () => {
    router.push(`/boards/new`);
  };

  /* Routing to BoardDetail */
  const onClickBoard = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards/${event.currentTarget.id}`);
  };

  /* Pagination에 쓸 데이터 */
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT, {
    variables: { search },
  });
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);
  const [current, setCurrent] = useState<number>(1); // 게시글 번호(index)와 현재 페이지 표시 style을 줄 때 사용

  return (
    <BoardsUI
      onClickWrite={onClickWrite}
      data={data}
      onClickBoard={onClickBoard}
      refetch={refetch}
      lastPage={lastPage}
      dataBest={dataBest}
      current={current}
      setCurrent={setCurrent}
      onChangeSearch={onChangeSearch}
      // onClickSearch={onClickSearch}
      keyword={keyword}
    />
  );
}
