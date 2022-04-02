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
  font-family: ${(props: ICurrentProps) =>
    props.isCurrent ? "GmarketSansTTFMedium" : "NanumSquareL"};
  cursor: pointer;
  width: 37px;
  font-size: 15px;
  text-align: center;
  :hover {
    color: #8b008b;
  }
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
