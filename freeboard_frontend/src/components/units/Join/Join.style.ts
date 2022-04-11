import styled from "@emotion/styled";
import { IJoinButtonProps, IJoinValidProps } from "./Join.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  margin: 100px auto;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 70px;
  margin-bottom: 50px;
  font-family: "NanumSquareEB";
  font-size: 30px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  height: 90px;
  padding-bottom: 10px;
`;

export const NameLabel = styled.div`
  font-size: 13px;
  font-family: "NanumSquareB";
  ${(props: IJoinValidProps) =>
    !props.nameError ? "color: black;" : "color: red;"};
`;
export const Name = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-family: -apple-system;
  &:focus {
    outline: none;
    ${(props: IJoinValidProps) =>
      !props.nameError
        ? "border-bottom: 2px solid gray;"
        : "border-bottom: 2px solid red;"};
  }
  ${(props: IJoinValidProps) =>
    !props.nameError
      ? "border-bottom: 1px solid #e3e3e3;"
      : "border-bottom: 1px solid red;"};
`;
export const EmailLabel = styled.div`
  font-size: 13px;
  font-family: "NanumSquareB";
  ${(props: IJoinValidProps) =>
    !props.emailError ? "color: black;" : "color: red;"};
`;
export const Email = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-family: -apple-system;
  &:focus {
    outline: none;
    ${(props: IJoinValidProps) =>
      !props.emailError
        ? "border-bottom: 2px solid gray;"
        : "border-bottom: 2px solid red;"};
  }
  ${(props: IJoinValidProps) =>
    !props.emailError
      ? "border-bottom: 1px solid #e3e3e3;"
      : "border-bottom: 1px solid red;"};
`;
export const PasswordLabel = styled.div`
  font-size: 13px;
  font-family: "NanumSquareB";
  ${(props: IJoinValidProps) =>
    !props.passwordError ? "color: black;" : "color: red;"};
`;
export const CheckPasswordLabel = styled.div`
  font-size: 13px;
  font-family: "NanumSquareB";
  ${(props: IJoinValidProps) =>
    !props.checkPasswordError ? "color: black;" : "color: red;"};
`;

export const Password = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-family: -apple-system;
  &:focus {
    outline: none;
    ${(props: IJoinValidProps) =>
      !props.passwordError
        ? "border-bottom: 2px solid gray;"
        : "border-bottom: 2px solid red;"};
  }
  ${(props: IJoinValidProps) =>
    !props.passwordError
      ? "border-bottom: 1px solid #e3e3e3;"
      : "border-bottom: 1px solid red;"};
`;
export const CheckPassword = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-family: -apple-system;
  &:focus {
    outline: none;
    ${(props: IJoinValidProps) =>
      !props.checkPasswordError
        ? "border-bottom: 2px solid gray;"
        : "border-bottom: 2px solid red;"};
  }
  ${(props: IJoinValidProps) =>
    !props.checkPasswordError
      ? "border-bottom: 1px solid #e3e3e3;"
      : "border-bottom: 1px solid red;"};
`;
export const InputError = styled.div`
  height: 40px;
  width: 100%;
  font-size: 11px;
  color: red;
`;

export const JoinButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  color: white;
  font-family: "NanumSquareB";
  margin-top: 20px;
  border-radius: 10px;
  ${(props: IJoinButtonProps) =>
    props.isActive
      ? "cursor: pointer; background-color:black;"
      : "cursor:default; background-color:#e3e3e3;"};
`;
