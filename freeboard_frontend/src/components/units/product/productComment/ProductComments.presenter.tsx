import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
const Wrapper = styled.div``;
const Comment = styled.div`
  color: black;
`;
const Contents = styled.div`
  color: black;
`;
export default function ProductCommentsUI(props: any) {
  console.log(props.data?.fetchUseditemQuestions);
  return (
    <>
      <Wrapper>
        {props.data?.fetchUseditemQuestions?.map((el: any) => (
          <Comment key={uuidv4()}>
            <Contents>{el?.contents}</Contents>
            <div>{el?.user?.name}</div>
            <div>{el?.createdAt}</div>
          </Comment>
        ))}
      </Wrapper>
    </>
  );
}
