import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentsUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (id: any) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  onToggleModal: (event: MouseEvent<HTMLElement>) => void;
  commentId: any;
}
export interface ICommentsItemUIProps {
  key: string;
  el: any;
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickDelete: (id: any) => void;
  onToggleModal: (event: MouseEvent<HTMLElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  isOpen: boolean;
  index: number;
}
