import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

/* BoardWrite.container */
export interface IBoardWriteProps {
  isEdit: boolean;
  data?: any;
}
export interface IAddressData {
  address: string;
  zonecode: string;
}
export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
  images?: string[];
}
/* BoardWrite.presenter */
export interface IBoardWriteUIProps {
  // container에서 props에 담아서 presenter로 보낸 애들
  isEdit: boolean;
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickCreate: () => void; // void: 리턴값이 일정하지 않을 때
  onClickUpdate: () => void; // 매개변수가 없으면 안에 안 넣어도 됨

  data?: Pick<IQuery, "fetchBoard">;
  isOpen: boolean;

  onToggleModal: () => void;
  onCompleteAddressSearch: (data: any) => void;

  // refactoring
  onChangeInputs: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  boardAddressInputs?: {
    address: string;
    addressDetail: string;
    zipcode: string;
  };

  errors: any;

  // imageUrl?: string;
  // setImageUrl?: any;

  fileList: any[];
  setFileList: any;
}

export interface ICreateButtonProps {
  isActive: boolean;
}
