import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USEDITEM,
  FETCH_USEDITEM,
  TOGGLE_USEDITEM_PICK,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.useditemId) },
  });
  console.log("구매한사람" + (data?.fetchUseditem?.buyer?.name || ""));
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

  const [createPointTransactionOfBuyingAndSelling] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        variables: { useritemId: String(router.query.useditemId) },
      });
      alert("구매가 완료되었습니다.");
      router.push(`/my`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickUpdate = () => {
    router.push(`/products/${router.query.useditemId}/edit`);
  };

  const [toggleUseditemPick] = useMutation(TOGGLE_USEDITEM_PICK);
  const onClickPick = async () => {
    try {
      await toggleUseditemPick({
        variables: { useditemId: String(router.query.useditemId) },
      });
      refetch();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return (
    <ProductDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickBuy={onClickBuy}
      onClickUpdate={onClickUpdate}
      onClickPick={onClickPick}
    />
  );
}
