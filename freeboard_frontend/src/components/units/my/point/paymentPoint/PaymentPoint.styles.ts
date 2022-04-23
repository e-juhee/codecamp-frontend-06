import styled from "@emotion/styled";
import { Maybe } from "../../../../../commons/types/generated/types";
interface IProps {
  isActive: Maybe<number> | undefined;
}

export const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  height: 40px;
  border: none;
  color: white;
  font-family: "NanumSquareEB";
  font-size: 18px;
  background: ${(props: IProps) => (props.isActive ? "#f70000" : "lightgray")};
  cursor: ${(props: IProps) => (props.isActive ? "pointer" : "")};
`;
