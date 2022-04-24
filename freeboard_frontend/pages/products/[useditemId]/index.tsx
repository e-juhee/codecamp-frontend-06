import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.container";
import ProductQuestions from "../../../src/components/units/productQuestion/list/ProductQuestions.container";
import ProductQuestionWrite from "../../../src/components/units/productQuestion/write/ProductQuestionWrite.container";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail />
      <ProductQuestionWrite />
      <ProductQuestions />
    </>
  );
}
