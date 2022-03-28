import { MouseEvent } from "react";

export interface IBoardsUIProps {
  onClickWrite: () => void;
  data: any;
  onClickBoard: (event: MouseEvent<HTMLDivElement>) => void;
}
