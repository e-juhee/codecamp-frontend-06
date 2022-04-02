import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Wrapper = styled.div`
  height: 400px;
`;
const Image = styled.img`
  height: 400px;
  width: 800px;
  object-fit: fill;
`;

export default function BannerUI() {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <Wrapper>
      {/* ...settings: 위의 객체 내용이 들어옴 */}
      <Slider {...settings}>
        <div>
          <Image src="/boards/banner/banner1.jpg" alt="london"></Image>
        </div>
        <div>
          <Image src="/boards/banner/banner2.jpg" alt="london"></Image>
        </div>
        <div>
          <Image src="/boards/banner/banner3.jpg" alt="london"></Image>
        </div>
        <div>
          <Image src="/boards/banner/banner1.jpg" alt="london"></Image>
        </div>
        <div>
          <Image src="/boards/banner/banner2.jpg" alt="london"></Image>
        </div>
        <div>
          <Image src="/boards/banner/banner3.jpg" alt="london"></Image>
        </div>
      </Slider>
    </Wrapper>
  );
}
