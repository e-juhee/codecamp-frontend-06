import { MouseEvent } from "react";

export interface IBoardsUIProps {
  onClickWrite: () => void;
  data: any;
  onClickBoard: (event: MouseEvent<HTMLDivElement>) => void;
  lastPage: number;
  refetch: any;
  dataBest: any;
}
export interface IPaginationProps {
  lastPage: number;
  refetch: any;
}
