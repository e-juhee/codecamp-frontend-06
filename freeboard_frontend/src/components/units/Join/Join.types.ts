import { ChangeEvent, RefObject } from "react";

export interface ILoginUIProps {
  inputRef: RefObject<HTMLInputElement>;
  nameValid: boolean;
  emailValid: boolean;
  passwordValid: boolean;
  checkPasswordValid: boolean;
  nameErrorMessage: string;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  checkPasswordErrorMessage: string;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => void;
  isActive: boolean;
}
export interface ILoginButtonProps {
  isActive: boolean;
}
export interface ILoginValidProps {
  nameValid?: boolean;
  emailValid?: boolean;
  passwordValid?: boolean;
  checkPasswordValid?: boolean;
}
