import BoardsUI from "./Boards.presenter"; // ./: 현위치에서
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_BEST,
  FETCH_BOARDS_COUNT,
} from "./Boards.queries";
import { ChangeEvent, MouseEvent, useState } from "react";

export default function Boards() {
  /* FETCH_BOARDS */
  const { data, refetch } = useQuery(FETCH_BOARDS); // data는 state와 동일한 역할을 한다. 값이 바뀌면 리렌더된다.

  const [search, setSearch] = useState<String>("");

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickSearch = (event: MouseEvent<HTMLButtonElement>) => {
    refetch();
    refetch({ search: search });
  };

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
  const [current, setCurrent] = useState<number>(1); // 게시글 번호와 현재 페이지 표시 style을 줄 때 사용

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
      onClickSearch={onClickSearch}
    />
  );
}
