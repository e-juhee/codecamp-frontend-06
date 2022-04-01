import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";

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
  const [myIndex, setMyIndex] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickEdit = (event: any) => {
    const aaa = myIndex;
    aaa[event.target.id] = true; // 직접 바꾼 것. 값은 바뀌어 있지만 화면은 새로 그려지지 않음 // 밑에서 setState를 하기 전에 여기서 이미 바뀜 // 여기까지만 하면 화면이 새로 그려지지는 않아서, 값이 바뀌면 화면을 새로 그려주는 state를 사용한다.
    console.log(aaa);
    // setMyIndex(aaa); // 기존의 state와 바꿀 값이 다를 때만 작동한다. (렌더링도)
    setMyIndex([...aaa]); // 새로운 배열이 만들어진다. 기존 값과 현재 값이 다를 때만 작동한다.
  };

  return (
    <>
      {data?.fetchBoards.map((el: any, index: any) => (
        <div key={el._id}>
          {!myIndex[index] && (
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
          {myIndex[index] && <div>수정하기 화면입니다.</div>}
        </div>
      ))}
    </>
  );
}
