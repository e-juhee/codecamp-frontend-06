import { ChangeEvent, MouseEvent } from "react";

export interface IBoardDetailProps {
  // boardId: string;
  //이 함수를 import 받고 있는 화면에서 보내는 데이터들의 타입을 지정해줘야 한다. 안하면 에러
}
export interface IBoardDetailUIProps {
  //이 함수를 import 받고 있는 화면에서 보내는 데이터들의 타입을 지정해줘야 한다. 안하면 에러
  // boardId?: string; //필요없는듯
  // isActive?: boolean; //필요없는듯
  data?: any;
  onClickToolTip?: () => void;
  onClickLike?: () => void;
  onClickDisLike?: () => void;
  onClickDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickList?: () => void;
  onClickUpdate?: () => void;
}
