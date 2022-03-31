import BoardsUI from "./Boards.presenter"; // ./: 현위치에서
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARDS,
  FETCH_BOARDS_BEST,
  FETCH_BOARDS_COUNT,
} from "./Boards.queries";
import { MouseEvent } from "react";

export default function Boards() {
  /* FETCH_BOARDS */
  const { data, refetch } = useQuery(FETCH_BOARDS);

  /* FETCH_BOARDS_BEST */
  const { data: dataBest } = useQuery(FETCH_BOARDS_BEST);
  console.log(dataBest);
  console.log("dataBest");

  /* Routing to BoardWrite */
  const router = useRouter();
  const onClickWrite = () => {
    router.push(`/boards2/new`);
  };

  /* Routing to BoardDetail */
  const onClickBoard = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards2/${event.target.id}`);
  };

  /* Pagination에 쓸 데이터 */
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  return (
    <BoardsUI
      onClickWrite={onClickWrite}
      data={data}
      onClickBoard={onClickBoard}
      refetch={refetch}
      lastPage={lastPage}
      dataBest={dataBest}
    />
  );
}
