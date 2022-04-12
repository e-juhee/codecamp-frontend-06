import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Wrapper = styled.div`
  /* z-index: -1; */
  /* position: relative; */
  margin-top: 99px;
  height: 470px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  /* padding: 0 100px; */
`;
const Item = styled.div`
  height: 470px;
  width: 100%;
  background-color: lightgray;
`;
const MySlider = styled(Slider)`
  width: 100%;
`;
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "3%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "3%",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}

export default function CustomArrows() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div
        style={{
          bottom: "15px",
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
          <Item></Item>
        </div>
        <div>
          <Item></Item>
        </div>
        <div>
          <Item></Item>
        </div>
        <div>
          <Item></Item>
        </div>
        <div>
          <Item></Item>
        </div>
        <div>
          <Item></Item>
        </div>
      </MySlider>
    </Wrapper>
  );
}
