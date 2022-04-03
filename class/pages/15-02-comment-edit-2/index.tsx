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
    const aaa = myIndex; // 이렇게 하면 배열의 주소를 공유하게 된다.
    aaa[event.target.id] = true;
    // 객체의 주소를 공유하기 때문에 원본의 내용도 함께 바뀐다.

    /* setMyIndex(aaa);
      // setState는 기존값과 변경된 값을 비교해서 값이 다를 때만 작동하는데, 
      // 위에서 값을 이미 바꿨기 때문에 여기서는 작동하지 않는다. */

    setMyIndex([...aaa]); // 새로운 배열(새로운 주소)가 만들어져서 화면이 리렌더된다.
  };

  return (
    <>
      {data?.fetchBoards.map((el: any, index: any) => (
        <div key={el._id}>
          {/* myIndex 중에 선택한 index번째의 값 확인 */}
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
