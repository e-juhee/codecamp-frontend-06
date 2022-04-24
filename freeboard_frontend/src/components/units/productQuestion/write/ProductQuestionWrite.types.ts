import { Dispatch, SetStateAction } from "react";

export interface ICommentWriteProps {
  isEdit?: any;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: any;
  data?: any;
  index?: number;
  useditemQuestionId?: string;
}
export interface ICommentWriteUIProps {
  isActive: boolean;
  contents?: string;
  onClickCreate: () => void;
  onClickUpdate: () => void;
  data?: any;

  isEdit?: any;
  index: any;
  onClickCancel: () => void;
  onChangeContents: any;
  el: any;
}
