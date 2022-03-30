import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "@emotion/styled";
const Wrapper = styled.div`
  height: 200px;
  margin: 0px auto 50px auto;
  width: 300px;
  .slick-prev:before {
    opacity: 1; // 기존에 숨어있던 화살표 버튼이 보이게
    color: black; // 버튼 색은 검은색으로
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;
const Img = styled.img`
  width: 300px;
  height: 200px;
  margin: 0px auto;
  object-fit: cover;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    };
    return (
      <Wrapper>
        <Slider {...settings}>
          <div>
            <Img src="/banner/1.jpeg"></Img>
          </div>
          <div>
            <Img src="/banner/2.jpeg"></Img>
          </div>
          <div>
            <Img src="/banner/3.jpeg"></Img>
          </div>
          <div>
            <Img src="/banner/4.jpeg"></Img>
          </div>
        </Slider>
      </Wrapper>
    );
  }
}
