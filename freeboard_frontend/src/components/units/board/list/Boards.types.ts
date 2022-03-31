import { Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardsUIProps {
  onClickWrite: () => void;
  data: Pick<IQuery, "fetchBoards">;
  onClickBoard: (event: MouseEvent<HTMLDivElement>) => void;
  lastPage: number;
  refetch: any;
  dataBest: Pick<IQuery, "fetchBoardsOfTheBest">;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}
export interface IPaginationProps {
  lastPage: number;
  refetch: any;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}
