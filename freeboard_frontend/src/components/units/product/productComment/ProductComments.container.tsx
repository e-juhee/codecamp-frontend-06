import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductCommentsUI from "./ProductComments.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./ProductComments.queries";

export default function ProductComments() {
  const router = useRouter();
  /* FETCH_BOARDS */
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: String(router.query.useditemId) },
  }); // data는 state와 동일한 역할을 한다. 값이 바뀌면 리렌더된다.
  // console.log("댓글");
  // console.log(data);

  return <ProductCommentsUI data={data} />;
}
