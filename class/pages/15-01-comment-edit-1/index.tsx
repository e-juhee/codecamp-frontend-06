import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function CommentEditPage() {
  const [myIndex, setMyIndex] = useState(-1); // index에 해당하는 값이 없는 -1을 초기값으로 준다.
  const { data } = useQuery(FETCH_BOARDS);

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>) => {
    if (event.target instanceof Element) setMyIndex(Number(event.target.id));
  };

  return (
    <>
      {data?.fetchBoards.map((el: any, index: any) => (
        <div key={el._id}>
          {/* 이 방식으로 하면 한번에 하나만 수정하기 화면으로 보여줄 수 있다. 여러개를 수정하기로 보여줄 수 없다. */}
          {index !== myIndex && (
            <MyRow key={el._id}>
              <MyColumn>
                <input type="checkbox" />
              </MyColumn>
              <MyColumn>{el._id}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <MyColumn>{el.writer}</MyColumn>
              <button id={index} onClick={onClickEdit}>
                수정
              </button>
            </MyRow>
          )}
          {/* 해당하는 index와 일치할 때만 수정하기 화면을 보여준다. */}
          {index === myIndex && <div>수정하기 화면입니다.</div>}
        </div>
      ))}
    </>
  );
}
