import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardsUIProps {
  onClickWrite: () => void;
  data: Pick<IQuery, "fetchUseditems"> | undefined;
  onClickProduct: (event: MouseEvent<HTMLDivElement>) => void;
  lastPage?: number;
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUseditems">>>;
  dataBest: any;
  current?: number;
  setCurrent?: Dispatch<SetStateAction<number>>;
  onChangeSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  // onClickSearch: (e: MouseEvent<HTMLButtonElement>) => void;
  keyword: string;
}
export interface IPaginationProps {
  lastPage: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}
