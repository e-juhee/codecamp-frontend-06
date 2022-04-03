import styled from "@emotion/styled";
import { useState } from "react";

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BoardCommentItem(props: any) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {!isEdit && (
        <MyRow>
          <MyColumn>
            <input type="checkbox" />
          </MyColumn>
          <MyColumn>{props.el._id}</MyColumn>
          <MyColumn>{props.el.title}</MyColumn>
          <MyColumn>{props.el.writer}</MyColumn>
          <button onClick={onClickEdit}>수정</button>
        </MyRow>
      )}
      {isEdit && <div>수정하기 화면입니다.</div>}
    </div>
  );
}
