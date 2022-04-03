import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardsUIProps {
  onClickWrite: () => void;
  data: Pick<IQuery, "fetchBoards"> | undefined;
  onClickBoard: (event: MouseEvent<HTMLDivElement>) => void;
  lastPage: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  dataBest: Pick<IQuery, "fetchBoardsOfTheBest">;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: (e: MouseEvent<HTMLButtonElement>) => void;
}
export interface IPaginationProps {
  lastPage: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}
