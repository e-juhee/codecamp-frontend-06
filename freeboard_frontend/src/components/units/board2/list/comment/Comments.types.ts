import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

export interface ICommentsUIProps {
  data?: any; //gql response 타입으로 바꾸기
  onClickDelete: (id: any) => void;
  isStar?: boolean;
  setIsStar?: Dispatch<SetStateAction<boolean>>;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;
  key?: string;
  onClickComment?: (event: MouseEvent<HTMLDivElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  onToggleModal: () => void;
  commentId: any;
}
export interface ICommentsItemUIProps {
  onClickComment?: (event: MouseEvent<HTMLDivElement>) => void;
  key: string;
  el: any;
  data?: any; //gql response 타입으로 바꾸기
  onClickDelete: (id: any) => void;
  onToggleModal: () => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
}
