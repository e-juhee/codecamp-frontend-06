import styled from "@emotion/styled";
import Slider from "react-slick";
export const Wrapper = styled.div`
  width: 1024px;
  border-top: 1px solid gray;
  margin: 100px auto;
  padding-top: 30px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Item = styled.img`
  width: 428px;
  height: 428px;
  background-color: lightgray;
  border: 1px solid lightgray;
  object-fit: cover;
  cursor: pointer;
`;
export const ModalItem = styled.img`
  width: 100%;
  height: 500px;
  background-color: lightgray;
  border: 1px solid lightgray;
  object-fit: contain;
`;
export const MySlider = styled(Slider)`
  width: 428px;
  height: 428px;
  margin-right: 40px;
  .slick-prev {
    left: 3%;
    z-index: 1;
  }
  .slick-prev:before {
    font-size: 40px;
    color: lightgray;
  }
  .slick-next {
    right: 7%;
    z-index: 1;
  }
  .slick-next:before {
    font-size: 40px;
    color: lightgray;
  }
  .slick-dots li.slick-active button::before {
    color: black;
  }
`;
export const ModalSlider = styled(Slider)`
  width: 100%;
  height: 100%;
  margin-right: 40px;
  .slick-prev {
    left: 3%;
    z-index: 1;
  }
  .slick-prev:before {
    font-size: 40px;
    color: lightgray;
  }
  .slick-next {
    right: 5%;
    z-index: 1;
  }
  .slick-next:before {
    font-size: 40px;
    color: lightgray;
  }
  .slick-dots li.slick-active button::before {
    color: black;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Name = styled.div`
  font-size: 30px;
  font-family: "NanumSquareEB";

  margin-bottom: 10px;
`;
export const Price = styled.div`
  width: 100%;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Remarks = styled.div`
  color: rgb(204, 204, 204);
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 10px;
  padding-top: 20px;
  border-top: 1px solid rgb(238, 238, 238);
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Button = styled.button`
  width: 32%;
  height: 60px;
  border: none;
  color: white;
  font-family: "NanumSquareEB";
  font-size: 18px;
  background: rgb(204, 204, 204);
  cursor: pointer;
`;
