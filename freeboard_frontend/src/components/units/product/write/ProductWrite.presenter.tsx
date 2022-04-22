import * as S from "./ProductWrite.style";
import { IProductWriteUIProps } from "./ProductWrite.types";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <S.Wrapper onSubmit={props.onSubmit}>
      <S.Title>상품 등록</S.Title>

      <S.InputWrapper>
        <S.Label>상품 이미지</S.Label>{" "}
        <S.ImageWrapper>
          <S.Input
            type="file"
            accept="image/png"
            multiple
            id="fileTag"
            style={{ display: "none" }}
            onChange={props.onChangeImage}
          />
          <S.ImageUpload htmlFor="fileTag">
            <S.CameraIcon src="/products/new/camera.png" />
            <S.ImageUploadLabel>이미지 등록</S.ImageUploadLabel>
          </S.ImageUpload>

          {props?.imageUrl &&
            props.imageUrl.map((el: any, i: number) => (
              <S.Image
                key={i}
                src={`https://storage.googleapis.com/${el}`}
                onClick={props.onClickImage(el)}
              />
            ))}
        </S.ImageWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.LabelWrapper>
          <S.NecessaryLabel>상품명</S.NecessaryLabel>
          <S.Necessary>*</S.Necessary>
        </S.LabelWrapper>
        <S.InputErrorWrapper>
          <S.Input
            defaultValue="상품명"
            type="text"
            {...props.register("name")}
          />
          <S.Error>{props.errors.name?.message}</S.Error>
        </S.InputErrorWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.LabelWrapper>
          <S.NecessaryLabel>가격</S.NecessaryLabel>
          <S.Necessary>*</S.Necessary>
        </S.LabelWrapper>
        <S.InputErrorWrapper>
          <S.Input
            type="number"
            {...props.register("price")}
            defaultValue={0}
          />
          <S.Error>{props.errors.price?.message}</S.Error>
        </S.InputErrorWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.LabelWrapper>
          <S.NecessaryLabel>설명</S.NecessaryLabel>
          <S.Necessary>*</S.Necessary>
        </S.LabelWrapper>
        <S.InputErrorWrapper>
          <ReactQuill
            onChange={props.onChangeContents}
            style={{ width: "856px", height: "300px", marginBottom: "40px" }}
          />

          <S.Error>{props.errors.contents?.message}</S.Error>
        </S.InputErrorWrapper>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>한 줄 요약</S.Label>{" "}
        <S.Input type="text" {...props.register("remarks")} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>연관 태그</S.Label>{" "}
        <S.Input type="text" {...props.register("tags")} />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Label>거래 장소</S.Label>

        <S.Input type="text" {...props.register("useditemAddress.zipcode")} />
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
