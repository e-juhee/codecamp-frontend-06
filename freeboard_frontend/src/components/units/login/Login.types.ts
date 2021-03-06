import { ChangeEvent, RefObject } from "react";

export interface ILoginUIProps {
  inputRef: RefObject<HTMLInputElement>;
  isChecked: boolean;
  emailValid: boolean;
  passwordValid: boolean;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSaveID: () => void;
  onClickLogin: () => void;
  isActive: boolean;
}
export interface ILoginButtonProps {
  isActive: boolean;
}
export interface ILoginValidProps {
  emailValid?: boolean;
  passwordValid?: boolean;
}
