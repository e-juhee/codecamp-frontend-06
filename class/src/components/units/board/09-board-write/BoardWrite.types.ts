import { ChangeEvent } from "react";

// 컨테이너 타입
export interface IBoardWriteProps {
  // 이 함수를 import 받고 있는 화면에서 보내는 데이터들의 타입을 지정해줘야 한다. 안하면 에러
  isEdit: boolean;
  data?: any;
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

// 프리젠터 타입
export interface IBoardWriteUIProps {
  // container에서 props에 담아서 보낸 애들 전부 타입 지정해줘야 한다.
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  callGraphqlApi: () => void;
  onClickUpdate: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: any;
}

// 스타일 타입
export interface ISubmitButtonProps {
  isActive: boolean;
}
