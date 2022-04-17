import { Image } from "./ProductDetail.style";
import { IProductDetailUIProps } from "./ProductDetail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  return (
    <div>
      {props.data?.fetchUseditem?.images &&
        props.data?.fetchUseditem?.images.map((el, i) => (
          <Image key={i} src={`https://storage.googleapis.com/${el}`} />
        ))}
    </div>
  );
}
