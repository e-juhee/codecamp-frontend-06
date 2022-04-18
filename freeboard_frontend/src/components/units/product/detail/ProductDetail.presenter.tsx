import { Image } from "./ProductDetail.style";
import { IProductDetailUIProps } from "./ProductDetail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <div>
      <div>상품명: {props.data?.fetchUseditem.name}</div>
      <div>내용: {props.data?.fetchUseditem.contents}</div>
      <div>{props.data?.fetchUseditem.price}원</div>

      {props.data?.fetchUseditem?.images &&
        props.data?.fetchUseditem?.images.map((el, i) => (
          <Image key={i} src={`https://storage.googleapis.com/${el}`} />
        ))}
    </div>
  );
}
