import BoardsUI from "./Boards.presenter"; // ./: 현위치에서
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARDS } from "./Boards.queries";
import { MouseEvent } from "react";

export default function Boards() {
  /*FETCH_BOARDS*/
  const { data } = useQuery(FETCH_BOARDS);

  const router = useRouter();
  /*Routing to BoardWrite*/
  const onClickWrite = () => {
    router.push(`/boards2/new`);
  };

  /*Routing to BoardDetail*/
  const onClickBoard = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element)
      router.push(`/boards2/${event.target.id}`);
  };

  return (
    <BoardsUI
      onClickWrite={onClickWrite}
      data={data}
      onClickBoard={onClickBoard}
    />
  );
}
