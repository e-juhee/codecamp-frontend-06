import * as S from "./ProductDetail.style";
import { IProductDetailUIProps } from "./ProductDetail.types";
import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Wrapper = styled.div`
  width: 428px;
  height: 428px;
  flex-direction: row;
  align-items: center;
`;
const Item = styled.img`
  width: 428px;
  height: 428px;
  background-color: lightgray;
  object-fit: cover;
`;
const MySlider = styled(Slider)`
  width: 428px;
  height: 428px;
  .slick-prev {
    left: 3%;
    z-index: 1;
  }
  .slick-prev:before {
    font-size: 40px;
  }
  .slick-next {
    right: 7%;
    z-index: 1;
  }
  .slick-next:before {
    font-size: 40px;
  }
  .slick-dots li.slick-active button::before {
    color: white;
  }
`;

export default function ProductDetailUI(props: IProductDetailUIProps) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          bottom: "20px",
          color: "white",
          left: "-6%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  console.log(props.data);
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <MySlider {...settings}>
            {props.data?.fetchUseditem?.images &&
              props.data?.fetchUseditem?.images.map((el, i) => (
                <div key={i}>
                  <Item
                    style={{ backgroundColor: "#f8f8f8" }}
                    src={`https://storage.googleapis.com/${el}`}
                  ></Item>
                </div>
              ))}
          </MySlider>

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
      <Wrapper></Wrapper>
    </>
  );
}
