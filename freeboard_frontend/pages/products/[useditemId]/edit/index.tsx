import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ProductWrite from "../../../../src/components/units/product/write/ProductWrite.container";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export default function ProductEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.useditemId) }, // 폴더명
  });

  return <ProductWrite isEdit={true} data={data} />;
}
