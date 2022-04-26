import * as S from "./ProductWrite.style";
import { IProductWriteUIProps } from "./ProductWrite.types";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import KakaoMapUI from "../../../commons/map/KakaoMap";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <>
      <S.Wrapper onSubmit={props.isEdit ? props.onClickUpdate : props.onSubmit}>
        <S.Title>{props.isEdit ? "상품 수정" : "상품 등록"}</S.Title>

        <S.InputWrapper>
          <S.Label>상품 이미지</S.Label>{" "}
          <S.ImageWrapper>
            <S.Input
              type="file"
              accept="image/png, image/jpeg,"
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
                <S.Image key={i} src={el} onClick={props.onClickImage(el, i)} />
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
              defaultValue={props?.data?.fetchUseditem.name}
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
              defaultValue={props?.data?.fetchUseditem?.price ?? 0}
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
          <S.Input
            type="text"
            {...props.register("remarks")}
            defaultValue={props?.data?.fetchUseditem?.remarks}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>연관 태그</S.Label>{" "}
          <S.Input
            type="text"
            {...props.register("tags")}
            placeholder="#태그"
            defaultValue={props?.data?.fetchUseditem?.tags.join("#")}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>거래 장소</S.Label>
          <S.AddressWrapper>
            <KakaoMapUI
              addressState={props.address}
              setAddress={props?.setAddress}
              address={props?.data?.fetchUseditem?.useditemAddress?.address}
              addressDetail={
                props?.data?.fetchUseditem?.useditemAddress?.addressDetail
              }
            ></KakaoMapUI>
          </S.AddressWrapper>
        </S.InputWrapper>

        <S.MapWrapper></S.MapWrapper>

        <S.Footer>
          <S.Button>{props.isEdit ? "수정 완료" : "등록하기"}</S.Button>
        </S.Footer>
      </S.Wrapper>
    </>
  );
}
