import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { ICommentWriteProps } from "./ProductQuestionWrite.types";

import { ChangeEvent, useState } from "react";
import {
  CREATE_USEDITEM_QUESTION,
  UPDATE_USEDITEM_QUESTION,
} from "./ProductQuestionWrite.queries";
import { FETCH_USEDITEM_QUESTIONS } from "../list/ProductQuestions.queries";
import ProductQuestionWriteUI from "./ProductQuestionWrite.presenter";
import { warningModal } from "../../../../commons/libraries/utils";

export default function ProductQuestionWrite(props: ICommentWriteProps) {
  const router = useRouter();

  const [isActive, setIsActive] = useState<boolean>(false); // isActive가 true이면 버튼 활성화 컬러로 변경

  const [contents, setContents] = useState(props?.el?.contents);
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  /* CREATE_BOARD_COMMENT */
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION); // queries에 작성한 쿼리를 가져와서 createBoard에 저장한다.

  const onClickCreate = async () => {
    if (!contents) {
      warningModal("내용을 입력해주세요.");
      return;
    }
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: { contents },
          useditemId: String(router.query.useditemId),
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
          },
        ],
      });
      setContents("");
      setIsActive(false);
    } catch (error) {
      if (error instanceof Error) warningModal(error.message);
    }
  };

  /* UPDATE_BOARD_COMMENT */
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);

  const onClickUpdate = async () => {
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: { contents },
          useditemQuestionId: props.useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: String(router.query.useditemId) },
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
    <ProductQuestionWriteUI
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
