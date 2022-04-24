import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import {
  successModal,
  warningModal,
} from "../../../../commons/libraries/utils";
import ProductAnswers from "../../productAnswer/list/ProductAnswers.container";
import ProductAnswerWrite from "../../productAnswer/write/ProductAnswerWrite.container";
import ProductQuestionWrite from "../write/ProductQuestionWrite.container";
import {
  DELETE_USEDITEM_QUESTION,
  FETCH_USEDITEM_QUESTIONS,
} from "./ProductQuestions.queries";
import * as S from "./ProductQuestions.styles";

export default function ProductQuestionsItemUI(props: any) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const onClickDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      if (e.target instanceof Element)
        await deleteUseditemQuestion({
          variables: { useditemQuestionId: e.target.id },
          refetchQueries: [
            {
              query: FETCH_USEDITEM_QUESTIONS,
              variables: {
                useditemId: String(router.query.useditemId),
              },
            },
          ],
        });
      successModal("삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) warningModal(error.message);
    }
  };

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const [answerCreate, setAnswerCreate] = useState(false);
  const onClickAnswerCreate = () => {
    setAnswerCreate(true);
  };

  return (
    <>
      {!isEdit && (
        <S.Comment>
          <div>{props.el?.user?.name}</div>
          <div>{props.el?.createdAt}</div>
          <S.Contents>{props.el?.contents}</S.Contents>
          <button
            id={props.el._id}
            onClick={onClickUpdate}
            style={{ backgroundColor: "pink" }}
          >
            질문 수정
          </button>
          <button
            id={props.el._id}
            onClick={onClickDelete}
            style={{ backgroundColor: "pink" }}
          >
            질문 삭제
          </button>
          <button
            id={props.el._id}
            onClick={onClickAnswerCreate}
            style={{ backgroundColor: "pink" }}
          >
            답변 작성
          </button>
          {answerCreate && (
            <ProductAnswerWrite
              useditemQuestionId={props.el._id}
              setAnswerCreate={setAnswerCreate}
            />
          )}
          <ProductAnswers useditemQuestionId={props.el._id} />
        </S.Comment>
      )}
      {isEdit && (
        <ProductQuestionWrite
          isEdit={true}
          setIsEdit={setIsEdit}
          useditemQuestionId={props.el._id}
          el={props.el}
          index={props.index}
          data={props.data}
        />
      )}
    </>
  );
}
