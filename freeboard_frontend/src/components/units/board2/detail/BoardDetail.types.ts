import { ChangeEvent, MouseEvent } from "react";

export interface IBoardDetailProps {
  // boardId: string;
  //이 함수를 import 받고 있는 화면에서 보내는 데이터들의 타입을 지정해줘야 한다. 안하면 에러
}
export interface IBoardDetailUIProps {
  //이 함수를 import 받고 있는 화면에서 보내는 데이터들의 타입을 지정해줘야 한다. 안하면 에러
  boardId?: string;

  isActive?: boolean;
  data?: any;
  onClickToolTip?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickLike?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDisLike?: (event: MouseEvent<HTMLDivElement>) => void;
  onClickDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickList?: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickUpdate?: (event: MouseEvent<HTMLButtonElement>) => void;

  /*
  //CommentWrite
  boardId?: string;

  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void; //변경될 때마다 event가 들어오기 때문에 인자 타입을 넣어줘야 함
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  // onChangeRating?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickCreate: (e: MouseEvent<HTMLButtonElement>) => void;
  */
}
