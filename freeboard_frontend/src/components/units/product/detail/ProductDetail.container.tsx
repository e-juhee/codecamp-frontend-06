import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailUI from "./ProductDetail.presenter";
import { DELETE_USEDITEM, FETCH_USEDITEM } from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  console.log(data);

  const [deleteUseditem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USEDITEM);

  const onClickDelete = () => {
    try {
      deleteUseditem({
        variables: { useditemId: String(router.query.useditemId) },
      });
      alert("삭제되었습니다.");
      router.push(`/products`);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return <ProductDetailUI data={data} onClickDelete={onClickDelete} />;
}
