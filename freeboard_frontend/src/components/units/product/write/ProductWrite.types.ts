import { BaseSyntheticEvent, ChangeEvent } from "react";
import {
  FieldValues,
  //   UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IProductWriteProps {
  isEdit?: boolean;
  data?: any;
}

export interface IProductWriteUIProps {
  isEdit: boolean;
  onClickUpdate: any;
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  errors: { [x: string]: any };
  isValid: boolean;
  //   handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  imageUrl?: any;
  onChangeImage?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickImageUpload?: () => void;
  setValue: any;
  trigger: any;
  onChangeContents: any;
  onClickImage: any;
  onCompleteAddressSearch: any;
  setAddress: any;
  address: any;
  data: any;
  hashArr: any;
  setHashArr: any;
  getValues: any;
}
