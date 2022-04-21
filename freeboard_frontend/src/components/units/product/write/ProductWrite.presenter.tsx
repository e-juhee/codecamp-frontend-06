import * as S from "./ProductWrite.style";
import { IProductWriteUIProps } from "./ProductWrite.types";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  console.log(props.imageUrl);
  const onChangeContents = (value: string) => {
    // event가 들어오는 것이 아니다. html의 속성이 아닌 ReactQuill의 속성이기 때문이다. value가 바로 들어온다.
    console.log(value);
    props.setValue("contents", value === "<p><br></p>" ? "" : value); // setValue를 사용하면 register로 등록하지 않고 강제로 값을 넣어줄 수 있다.
    // onChange가 됐다고 react-hook-form에 알려주는 기능
    props.trigger("contents");
  };
  return (
    <S.Wrapper onSubmit={props.onSubmit}>
      <S.Title>상품 등록</S.Title>

      <S.InputWrapper>
        <S.Label>상품 이미지</S.Label>{" "}
        <S.ImageUpload htmlFor="fileTag">+</S.ImageUpload>
        <S.Input
          type="file"
          accept="image/png"
          multiple
          id="fileTag"
          style={{ display: "none" }}
          onChange={props.onChangeImage}
        />
        {props?.imageUrl &&
          props.imageUrl.map((el: any, i: number) => (
            <S.Image key={i} src={`https://storage.googleapis.com/${el}`} />
          ))}
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>상품명</S.Label>{" "}
        <S.Input
          defaultValue="상품명"
          type="text"
          {...props.register("name")}
        />
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
        <S.Label>설명</S.Label>{" "}
        {/* <S.TextArea defaultValue="설명" {...props.register("contents")} /> */}
        <ReactQuill
          onChange={onChangeContents}
          style={{ width: "100%", height: "300px" }}
        />
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
