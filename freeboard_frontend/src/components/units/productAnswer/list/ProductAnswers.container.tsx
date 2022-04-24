import { useQuery } from "@apollo/client";
import ProductAnswersUI from "./ProductAnswers.presenter";
import { FETCH_USEDITEM_QUESTION_ANSWERS } from "./ProductAnswers.queries";

export default function ProductAnswers(props: any) {
  const { data } = useQuery(FETCH_USEDITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.useditemQuestionId },
  });

  return (
    <ProductAnswersUI
      data={data}
      useditemQuestionId={props.useditemQuestionId}
    />
  );
}
