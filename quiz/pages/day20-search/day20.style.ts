import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 100px auto;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0px 10px;
  /* width: 500px; */
  background-color: lightgray;
`;
export const Search = styled.input`
  display: flex;
  flex-direction: column;
  height: 30px;
  width: 400px;
`;
export const Row = styled.div`
  display: flex;
  height: 40px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

export const Title = styled.div`
  width: 80%;
  font-weight: 600;
  font-size: 15px;
  overflow: hidden;
`;
export const Writer = styled.div`
  width: 20%;
  text-align: center;
`;

export interface IProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 500px;
  padding: 10px 70px;
  background-color: gray;
  color: white;
`;

export const Page = styled.span`
  cursor: pointer;
`;
