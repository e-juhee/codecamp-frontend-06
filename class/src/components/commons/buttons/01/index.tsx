import styled from "@emotion/styled";

interface IProps {
  isActive: boolean;
}

const Button = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? "yellow" : "")};
`;

export default function Button01(props: any) {
  return <Button isActive={props.isActive}>{props.title}</Button>;
}
