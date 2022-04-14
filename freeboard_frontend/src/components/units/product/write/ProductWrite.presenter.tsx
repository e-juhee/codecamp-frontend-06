import * as S from "./ProductWrite.style";
import { IProductWriteUIProps } from "./ProductWrite.types";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <S.Wrapper onSubmit={props.onSubmit}>
      <S.Title>상품 등록</S.Title>

      <S.InputWrapper>
        <S.Label>상품 이미지</S.Label>{" "}
        <S.Input type="file" {...props.register("images")} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>상품명</S.Label>{" "}
        <S.Input type="text" {...props.register("name")} />
        <S.Error>{props.errors.name?.message}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>한 줄 요약</S.Label>{" "}
        <S.Input type="text" {...props.register("remarks")} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>판매 가격</S.Label>
        <S.Input type="number" {...props.register("price")} defaultValue={0} />
        <S.Error>{props.errors.price?.message}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>설명</S.Label> <S.TextArea {...props.register("contents")} />
        <S.Error>{props.errors.contents?.message}</S.Error>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>연관 태그</S.Label>{" "}
        <S.Input type="text" {...props.register("tags")} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>우편번호</S.Label>
        <S.Input type="text" {...props.register("useditemAddress.zipcode")} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>주소</S.Label>{" "}
        <S.Input type="text" {...props.register("useditemAddress.address")} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>상세 주소</S.Label>
        <S.Input
          type="text"
          {...props.register("useditemAddress.addressDetail")}
        />
      </S.InputWrapper>
      <S.Footer>
        <S.Button>등록하기</S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
