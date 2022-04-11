import { ChangeEvent, RefObject } from "react";

export interface ILoginUIProps {
  inputRef: RefObject<HTMLInputElement>;
  nameError: string;
  emailError: string;
  passwordError: string;
  checkPasswordError: string;
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeCheckPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickJoin: () => void;
  isActive: boolean;
}
export interface IJoinButtonProps {
  isActive: boolean;
}
export interface IJoinValidProps {
  nameError?: string;
  emailError?: string;
  passwordError?: string;
  checkPasswordError?: string;
}
