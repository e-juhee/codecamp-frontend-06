import * as S from "./ProductDetail.style";
import { IProductDetailUIProps } from "./ProductDetail.types";

export default function ProductDetailUI(props: IProductDetailUIProps) {
  console.log(props.data);
  return (
    <S.Wrapper>
      <S.Header>
        {props.data?.fetchUseditem?.images &&
          props.data?.fetchUseditem?.images.map((el, i) => (
            <S.Image key={i} src={`https://storage.googleapis.com/${el}`} />
          ))}
        <S.Info>
          <S.Name>{props.data?.fetchUseditem.name}</S.Name>
          <S.Price>{props.data?.fetchUseditem.price}원</S.Price>
          <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
          <S.ButtonWrapper>
            <S.Button>버튼을</S.Button>
            <S.Button style={{ backgroundColor: "#ffa425" }}>언젠간</S.Button>
            <S.Button style={{ backgroundColor: "#f70000" }}>쓰겠지</S.Button>
          </S.ButtonWrapper>
        </S.Info>
      </S.Header>
      {props.data?.fetchUseditem?.tags &&
        props.data?.fetchUseditem?.tags.map((el, i) => <div key={i}>{el}</div>)}
      <div>{props.data?.fetchUseditem.contents}</div>
    </S.Wrapper>
  );
}
