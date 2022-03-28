import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface ICommentsUIProps {
  data?: any; //gql response 타입으로 바꾸기
  onClickDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
  isStar?: boolean;
  setIsStar?: Dispatch<SetStateAction<boolean>>;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;
  key?: string;
  onClickComment?: (event: MouseEvent<HTMLDivElement>) => void;
}
export interface ICommentsItemUIProps {
  onClickComment?: (event: MouseEvent<HTMLDivElement>) => void;
  key: string;
  el: any;
  data?: any; //gql response 타입으로 바꾸기
  onClickDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
}
