import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";

export default function Day11HighStar() {
  const [rating, setRating] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const Star = styled.div`
    background-image: ${(props) =>
      props.isActive ? 'url("/activeStar.png")' : 'url("/defaultStar.png")'};
    background-size: cover;
    width: 50px;
    height: 50px;
  `;
  const Wrapper = styled.div`
    display: flex;
  `;

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) setRating(Number(e.target.id));
    alert(e.target.id + "점");
  };

  return (
    <>
      <Wrapper>
        <Star id="1" onClick={onClick} isActive={rating >= 1}></Star>
        <Star id="2" onClick={onClick} isActive={rating >= 2}></Star>
        <Star id="3" onClick={onClick} isActive={rating >= 3}></Star>
        <Star id="4" onClick={onClick} isActive={rating >= 4}></Star>
        <Star id="5" onClick={onClick} isActive={rating >= 5}></Star>
        <br />
      </Wrapper>
      {rating}점
    </>
  );
}
