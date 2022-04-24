import { useMutation } from "@apollo/client";
import { ICommentWriteProps } from "./ProductAnswerWrite.types";
import { ChangeEvent, useState } from "react";
import { warningModal } from "../../../../commons/libraries/utils";
import {
  CREATE_USEDITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION_ANSWER,
} from "./ProductAnswerWrite.queries";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "../list/ProductAnswers.queries";
import ProductAnswerWriteUI from "./ProductAnswerWrite.presenter";

export default function ProductAnswerWrite(props: ICommentWriteProps) {
  const [isActive, setIsActive] = useState<boolean>(false); // isActive가 true이면 버튼 활성화 컬러로 변경

  const [contents, setContents] = useState(props?.el?.contents);
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  /* CREATE_BOARD_COMMENT */
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USEDITEM_QUESTION_ANSWER
  ); // queries에 작성한 쿼리를 가져와서 createBoard에 저장한다.

  const onClickCreate = async () => {
    if (!contents) {
      warningModal("내용을 입력해주세요.");
      return;
    }
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { contents },
          useditemQuestionId: props.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      });
      setContents("");
      setIsActive(false);
      props.setAnswerCreate(false);
    } catch (error) {
      if (error instanceof Error) warningModal(error.message);
    }
  };

  /* UPDATE_BOARD_COMMENT */
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );

  const onClickUpdate = async () => {
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents },
          useditemQuestionAnswerId: props.useditemQuestionAnswerId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTION_ANSWERS,
            variables: { useditemQuestionId: props.useditemQuestionId },
          },
        ],
      });
      // if (props.setIsEdit) // TS 에러 방지: 옵셔널 체이닝을 이용한 아래 방법도 ㄱㅊ
      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error) warningModal(error.message);
    }
  };

  const onClickCancel = () => {
    props.setIsEdit?.(false);
  };
  return (
    <ProductAnswerWriteUI
      isActive={isActive}
      contents={contents}
      onClickCreate={onClickCreate}
      isEdit={props.isEdit}
      onClickUpdate={onClickUpdate}
      data={props.data} // Comments.container에서 온 fetchBoardComments : 값이 안 온다.
      index={props.index}
      onClickCancel={onClickCancel}
      onChangeContents={onChangeContents}
      el={props.el}
    />
  );
}
