import { ChangeEvent } from "react";

export interface ILoginUIProps {
  isChecked: boolean;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSaveID: () => void;
  onClickLogin: () => void;
  isActive: boolean;
}
export interface ILoginStyleProps {
  isActive: boolean;
}
