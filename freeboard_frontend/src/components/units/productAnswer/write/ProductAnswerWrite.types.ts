import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentWriteProps {
  isEdit?: any;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: any;
  data?: Pick<IQuery, "fetchBoardComments">;
  index?: number;
  useditemQuestionAnswerId?: string;
  setAnswerCreate?: any;
  useditemQuestionId?: string;
}
export interface ICommentWriteUIProps {
  isActive: boolean;
  contents?: string;
  onClickCreate: () => void;
  onClickUpdate: () => void;
  data?: Pick<IQuery, "fetchBoardComments">;
  isEdit?: any;
  index: any;
  onClickCancel: () => void;
  onChangeContents: any;
  el: any;
}
