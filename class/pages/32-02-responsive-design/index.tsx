import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 62.5rem; // body의 font-size에 따라 바뀐다.
  height: 1000px;
  background-color: red;
  border: 3px solid yellow;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blue;
    /* display: none; */
  }
`;

export default function ResponsiveDesignPage() {
  return (
    <div>
      <Wrapper>상자</Wrapper>
    </div>
  );
}
