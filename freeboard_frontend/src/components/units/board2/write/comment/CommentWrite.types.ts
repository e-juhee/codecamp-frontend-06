import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

/* BoardWrite.container */
export interface ICommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: any;
  data?: any;
}
export interface ICommentWriteUIProps {
  isActive: boolean;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void; //변경될 때마다 event가 들어오기 때문에 인자 타입을 넣어줘야 함
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickStar: (e: MouseEvent<HTMLButtonElement>) => void;
  writer: string;
  password: string;
  contents: string;
  rating: number;
  onClickCreate: () => void;
  onClickUpdate: () => void;
  data?: any;
  isEdit?: boolean;
  // boardId?: string;
  // onChangeRating?: (score: number) => void;
  // id?: string;
}
