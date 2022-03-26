import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

/* BoardWrite.container */

export interface ICommentWriteProps {
  writer: string;
  password: string;
  contents: string;
  rating?: number;
  isActive?: boolean;
  boardId?: string;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void; //변경될 때마다 event가 들어오기 때문에 인자 타입을 넣어줘야 함
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickStar: (e: MouseEvent<HTMLButtonElement>) => void;
  // onChangeRating?: (score: number) => void;
  onClickCreate: (e: MouseEvent<HTMLButtonElement>) => void;
}
