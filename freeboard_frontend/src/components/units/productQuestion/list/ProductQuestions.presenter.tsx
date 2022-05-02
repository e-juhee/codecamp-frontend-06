import ProductQuestionsItemUI from "./ProductQuestions.presenterItem";
import { v4 as uuidv4 } from "uuid";
import * as S from "./ProductQuestions.styles";

export default function ProductQuestionsUI(props: any) {
  return (
    <>
      <S.Wrapper>
        {props.data?.fetchUseditemQuestions?.map((el: any) => (
          <ProductQuestionsItemUI key={uuidv4()} el={el} />
        ))}
      </S.Wrapper>
    </>
  );
}
