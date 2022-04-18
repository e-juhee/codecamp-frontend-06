import { BaseSyntheticEvent } from "react";
import {
  FieldValues,
  //   UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

// interface IUsedItemAddress {
//   zipcode: string;
//   address: string;
//   addressDetail?: string;
//   lat?: number;
//   lng?: number;
// }

// export interface IFormValues {
//   name: string;
//   remarks?: string;
//   contents: string;
//   price: number;
//   tags?: string[];
//   useditemAddress?: IUsedItemAddress;
//   images: string[];
// }

export interface IProductWriteUIProps {
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  errors: { [x: string]: any };
  isValid: boolean;
  //   handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  imageUrl?: any;
}
