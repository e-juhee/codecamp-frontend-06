import * as S from "./ProductDetail.style";
import { IProductDetailUIProps } from "./ProductDetail.types";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Modal } from "antd";
import { useState } from "react";

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
    setIsModal((prev) => !prev);
  };

  console.log(props.data);

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
        title="로그인 성공"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        width={1000}
      >
        <S.MySlider {...settings}>
          {props.data?.fetchUseditem?.images &&
            props.data?.fetchUseditem?.images.map((el, i) => (
              <div key={i}>
                <S.ModalItem
                  onClick={onClickImage(i)}
                  style={{ backgroundColor: "#f8f8f8" }}
                  src={`https://storage.googleapis.com/${el}`}
                ></S.ModalItem>
              </div>
            ))}
        </S.MySlider>
      </Modal>
      <S.Wrapper>
        <S.Header>
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
          props.data?.fetchUseditem?.tags.map((el, i) => (
            <div key={i}>{el}</div>
          ))}
        <div>{props.data?.fetchUseditem.contents}</div>
      </S.Wrapper>
    </>
  );
}
