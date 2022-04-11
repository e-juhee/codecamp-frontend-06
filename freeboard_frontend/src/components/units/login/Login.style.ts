import { CheckCircleFilled, CheckCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { ILoginStyleProps } from "./Login.types";

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

export const Label = styled.div`
  font-size: 14px;
  font-family: "NanumSquareB";
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  font-family: -apple-system;
  &:focus {
    outline: none;
    border-bottom: 2px solid gray;
  }
  // props.isActive
  // ? "border-bottom: 1px solid #e3e3e3;"
  // : "border-bottom: 1px solid red;"};
  border-bottom: 1px solid #e3e3e3;
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
  ${(props: ILoginStyleProps) =>
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
export const SubButton = styled.button`
  width: 30%;
  height: 30px;
  border: none;
  background-color: transparent;
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
