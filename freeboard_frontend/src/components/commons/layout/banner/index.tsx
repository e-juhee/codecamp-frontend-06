import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Wrapper = styled.div`
  /* margin-top: 99px; */
  height: 470px;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;
const Item = styled.img`
  height: 470px;
  width: 100%;
  background-color: lightgray;
  object-fit: contain;
`;
const MySlider = styled(Slider)`
  width: 100%;
  .slick-prev {
    left: 3%;
    z-index: 1;
  }
  .slick-prev:before {
    font-size: 40px;
  }
  .slick-next {
    right: 3%;
    z-index: 1;
  }
  .slick-next:before {
    font-size: 40px;
  }
  .slick-dots li.slick-active button::before {
    color: white;
  }
`;

export default function CustomArrows() {
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
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <Wrapper>
      <MySlider {...settings}>
        <div>
          <Item
            style={{ backgroundColor: "#f8f8f8" }}
            src="/boards/banner/banner1.jpeg"
          ></Item>
        </div>
        <div>
          <Item
            style={{ backgroundColor: "#ff8b00" }}
            src="/boards/banner/banner2.jpeg"
          ></Item>
        </div>
        <div>
          <Item
            style={{ backgroundColor: "#bf9773", paddingBottom: "10px" }}
            src="/boards/banner/banner3.jpg"
          ></Item>
        </div>
        <div>
          <Item
            style={{ backgroundColor: "#820004", paddingBottom: "20px" }}
            src="/boards/banner/banner4.jpg"
          ></Item>
        </div>
        <div>
          <Item
            style={{ backgroundColor: "#fa938c", paddingBottom: "10px" }}
            src="/boards/banner/banner5.jpg"
          ></Item>
        </div>
        <div>
          <Item
            style={{ backgroundColor: "#738ab3", paddingBottom: "10px" }}
            src="/boards/banner/banner6.jpg"
          ></Item>
        </div>
      </MySlider>
    </Wrapper>
  );
}
