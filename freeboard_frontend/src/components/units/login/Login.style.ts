import { CheckCircleFilled, CheckCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { ILoginButtonProps, ILoginValidProps } from "./Login.types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  margin: 100px auto;
`;
export const Logo = styled.div`
  width: 70%;
  height: 70px;
  border: 1px solid gray;
  margin-bottom: 50px;
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

export const EmailLabel = styled.div`
  font-size: 13px;
  font-family: "NanumSquareB";
  ${(props: ILoginValidProps) =>
    props.emailValid ? "color: black;" : "color: red;"};
`;
export const PasswordLabel = styled.div`
  font-size: 13px;
  font-family: "NanumSquareB";
  ${(props: ILoginValidProps) =>
    props.passwordValid ? "color: black;" : "color: red;"};
`;
export const Email = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-family: -apple-system;
  &:focus {
    outline: none;
    ${(props: ILoginValidProps) =>
      props.emailValid
        ? "border-bottom: 2px solid gray;"
        : "border-bottom: 2px solid red;"};
  }
  ${(props: ILoginValidProps) =>
    props.emailValid
      ? "border-bottom: 1px solid #e3e3e3;"
      : "border-bottom: 1px solid red;"};
`;
export const Password = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-family: -apple-system;
  &:focus {
    outline: none;
    ${(props: ILoginValidProps) =>
      props.passwordValid
        ? "border-bottom: 2px solid gray;"
        : "border-bottom: 2px solid red;"};
  }
  ${(props: ILoginValidProps) =>
    props.passwordValid
      ? "border-bottom: 1px solid #e3e3e3;"
      : "border-bottom: 1px solid red;"};
`;
export const InputError = styled.div`
  height: 40px;
  width: 100%;
  font-size: 11px;
  color: red;
`;
export const SaveID = styled.div`
  cursor: pointer;
  user-select: none;
  margin-bottom: 20px;
`;
export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  color: white;
  font-family: "NanumSquareB";
  margin-bottom: 20px;
  border-radius: 10px;
  ${(props: ILoginButtonProps) =>
    props.isActive
      ? "cursor: pointer; background-color:black;"
      : "cursor:default; background-color:#e3e3e3;"};
`;

export const SubButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  color: lightgray;
`;
export const SubButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 30px;
  color: black;
  font-size: 13.5px;
  cursor: pointer;
`;

export const CheckIcon = styled(CheckCircleOutlined)`
  padding-right: 5px;
`;
export const FilledCheckIcon = styled(CheckCircleFilled)`
  padding-right: 5px;
`;
