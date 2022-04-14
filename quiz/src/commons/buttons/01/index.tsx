import styled from "@emotion/styled";

interface IProps {
  isActive?: boolean;
  title?: string;
  placeholder?: string;
}

const Button = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? "yellow" : "")};
  width: 260px;
  height: 40px;
`;

export default function Button01(props: IProps) {
  return (
    <Button placeholder={props.placeholder} isActive={props.isActive}>
      {props.title}
    </Button>
  );
}
