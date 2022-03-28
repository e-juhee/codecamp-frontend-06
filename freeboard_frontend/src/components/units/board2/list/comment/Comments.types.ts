import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface ICommentsUIProps {
  //이 함수를 import 받고 있는 화면에서 보내는 데이터들의 타입을 지정해줘야 한다. 안하면 에러
  data?: any; //gql response 타입으로 바꾸기
  data2?: any;
  onClickDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
  // onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;

  isStar?: boolean;
  setIsStar?: Dispatch<SetStateAction<boolean>>;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;

  key?: string;
  el?: any;
  onClickComment?: (event: any) => void;
}
