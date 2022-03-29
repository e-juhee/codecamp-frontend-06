import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

/* BoardWrite.container */
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}
export interface IVariables {
  boardId: string;
  password: string;
  updateBoardInput?: IUpdateBoardInput;
}
export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: IBoardAddress;
}
export interface IBoardAddress {
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

/* BoardWrite.presenter */
export interface IBoardWriteUIProps {
  //container에서 props에 담아서 presenter로 보낸 애들
  isEdit: boolean;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  writerError: string;
  passwordError: string;
  titleError: string;
  contentsError: string;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void; //변경될 때마다 event가 들어오기 때문에 인자 타입을 넣어줘야 함
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeZipcode: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddress: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCreate: () => void; //void: 리턴값이 일정하지 않을 때
  onClickUpdate: () => void; //매개변수가 없으면 안에 안 넣어도 됨

  data: any;

  handleComplete: (data: any) => void;
  onToggleModal: () => void;
  isOpen: boolean;

  address: string;
  zipcode: string;
}

export interface ICreateButtonProps {
  isActive: boolean;
}
