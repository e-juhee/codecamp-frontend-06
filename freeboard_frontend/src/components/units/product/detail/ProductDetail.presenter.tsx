import * as S from "./ProductDetail.style";
import { IProductDetailUIProps } from "./ProductDetail.types";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Modal } from "antd";
import { useState } from "react";
import DOMPurify from "dompurify";
import KakaoMapView from "../../../commons/map/KakaoMapView";
export default function ProductDetailUI(props: IProductDetailUIProps) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          bottom: "-30px",
          color: "gray",
          left: "-6%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const onClickImage = (i: any) => () => {
    // const currentImages = props.data?.fetchUseditem?.images?.slice(i-1);
    // // 지금 있는 배열 순서를, 지금 인덱스가 첫번째로 가도록 변경
    // const modalImages = [currentImages, props.data?.fetchUseditem?.images]
    setIsModal((prev) => !prev);
  };

  const [isModal, setIsModal] = useState(false);
  const handleOk = () => {
    setIsModal((prev) => !prev);
  };
  const handleCancel = () => {
    setIsModal((prev) => !prev);
  };
  return (
    <>
      <Modal
        visible={isModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={1000}
      >
        {props.data?.fetchUseditem?.images ? (
          <S.ModalSlider {...settings}>
            {props.data?.fetchUseditem?.images.map((el, i) => (
              <div key={i}>
                <S.ModalItem
                  style={{ backgroundColor: "#f8f8f8" }}
                  src={`https://storage.googleapis.com/${el}`}
                ></S.ModalItem>
              </div>
            ))}
          </S.ModalSlider>
        ) : (
          <S.DefaultImg></S.DefaultImg>
        )}
      </Modal>
      <S.Wrapper>
        <S.Header>
          <S.SliderWrapper>
            <S.MySlider {...settings}>
              {props.data?.fetchUseditem?.images &&
                props.data?.fetchUseditem?.images.map((el, i) => (
                  <div key={i}>
                    <S.Item
                      onClick={onClickImage(i)}
                      style={{ backgroundColor: "#f8f8f8" }}
                      src={`https://storage.googleapis.com/${el}`}
                    ></S.Item>
                  </div>
                ))}
            </S.MySlider>
          </S.SliderWrapper>

          <S.Info>
            <S.Name>{props.data?.fetchUseditem.name}</S.Name>
            <S.Price>{props.data?.fetchUseditem.price}원</S.Price>
            <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
            <S.ButtonWrapper>
              <S.Button onClick={props.onClickUpdate}>수정하기</S.Button>
              <S.Button
                onClick={props.onClickDelete}
                style={{ backgroundColor: "#ffa425" }}
              >
                삭제하기
              </S.Button>
              <S.Button
                onClick={props.onClickBuy}
                style={{ backgroundColor: "#f70000" }}
              >
                구매하기
              </S.Button>
            </S.ButtonWrapper>
          </S.Info>
        </S.Header>
        {props.data?.fetchUseditem?.tags &&
          props.data?.fetchUseditem?.tags.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        {/* <div>{props.data?.fetchUseditem.contents}</div> */}
        {typeof window !== "undefined" ? (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                props.data?.fetchUseditem.contents || ""
              ),
            }}
          ></div>
        ) : (
          <div></div>
        )}
        {props.data?.fetchUseditem?.useditemAddress && (
          <KakaoMapView
            lat={Number(props.data?.fetchUseditem?.useditemAddress?.lat)}
            lng={Number(props.data?.fetchUseditem?.useditemAddress?.lng)}
          />
        )}
      </S.Wrapper>
    </>
  );
}
