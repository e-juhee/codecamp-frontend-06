import { useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
import {
  successModal,
  warningModal,
} from "../../../../commons/libraries/utils";
import ProductAnswerWrite from "../write/ProductAnswerWrite.container";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTION_ANSWERS,
} from "./ProductAnswers.queries";

const Comment = styled.div``;
const Contents = styled.div``;
export default function ProductAnswersItemUI(props: any) {
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USEDITEM_QUESTION_ANSWER
  );

  const onClickDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      if (e.target instanceof Element)
        await deleteUseditemQuestionAnswer({
          variables: { useditemQuestionAnswerId: e.target.id },
          refetchQueries: [
            {
              query: FETCH_USEDITEM_QUESTION_ANSWERS,
              variables: {
                useditemQuestionId: String(props.useditemQuestionId),
              },
            },
          ],
        });
      successModal("삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) warningModal(error.message);
    }
  };

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  return (
    <>
      {!isEdit && (
        <Comment>
          <div>{props.el?.user?.name}</div>
          <div>{props.el?.createdAt}</div>
          <Contents>{props.el?.contents}</Contents>
          <button id={props.el._id} onClick={onClickUpdate}>
            답변 수정
          </button>
          <button id={props.el._id} onClick={onClickDelete}>
            답변 삭제
          </button>
        </Comment>
      )}
      {isEdit && (
        <ProductAnswerWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          useditemQuestionAnswerId={props.el._id}
          useditemQuestionId={props.useditemQuestionId}
          el={props.el}
          index={props.index}
          data={props.data}
        />
      )}
    </>
  );
}
