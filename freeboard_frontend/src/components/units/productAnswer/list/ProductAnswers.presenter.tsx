import styled from "@emotion/styled";
import ProductAnswersItemUI from "./ProductAnswers.presenterItem";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div``;

export default function ProductAnswersUI(props: any) {
  console.log(props.data?.fetchUseditemQuestionAnswers);
  return (
    <>
      <Wrapper>
        {props.data?.fetchUseditemQuestionAnswers?.map((el: any) => (
          <ProductAnswersItemUI
            key={uuidv4()}
            el={el}
            useditemQuestionId={props.useditemQuestionId}
          />
        ))}
      </Wrapper>
    </>
  );
}
