import styled from "@emotion/styled";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 400px;
`;
export default function Board(props: any) {
  return (
    <div>
      {props.data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el.title}</MyColumn>
          <MyColumn>{el.writer}</MyColumn>
        </MyRow>
      ))}
    </div>
  );
}
