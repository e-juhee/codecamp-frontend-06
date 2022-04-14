import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input`
  width: 200px;
`;

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder?: string;
}

export default function Input01(props: IProps) {
  return (
    <Input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
