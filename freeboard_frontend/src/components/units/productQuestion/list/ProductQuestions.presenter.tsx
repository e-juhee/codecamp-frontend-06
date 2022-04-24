import styled from "@emotion/styled";
import ProductQuestionsItemUI from "./ProductQuestions.presenterItem";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div``;

export default function ProductQuestionsUI(props: any) {
  return (
    <>
      <Wrapper>
        {props.data?.fetchUseditemQuestions?.map((el: any) => (
          <ProductQuestionsItemUI key={uuidv4()} el={el} />
        ))}
      </Wrapper>
    </>
  );
}
