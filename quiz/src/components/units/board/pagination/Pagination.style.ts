import styled from "@emotion/styled";

interface ICurrentProps {
  isCurrent: boolean;
}
interface IActiveProps {
  isActive: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 400px;
  margin-top: 30px;
`;

export const PageNumber = styled.div`
  color: ${(props: ICurrentProps) => (props.isCurrent ? "#8B008B" : "gray")};
  font-weight: ${(props: ICurrentProps) => (props.isCurrent ? "700" : "400")};
  cursor: pointer;
  /* padding: 0 5px; */
  width: 37px;
  font-size: 12px;
  text-align: center;
`;
export const PageNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 330px;
`;

export const Button = styled.button`
  color: ${(props: IActiveProps) => (props.isActive ? "black" : "white")};
  cursor: ${(props: IActiveProps) => (props.isActive ? "pointer" : "")};
`;
