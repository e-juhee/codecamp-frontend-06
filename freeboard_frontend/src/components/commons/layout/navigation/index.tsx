import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #bdbbbb;
  padding: 0 500px;
`;
const Menu = styled.div`
  height: 30px;
  font-weight: 700;
  font-size: 18px;
  font-family: ${(props: IProps) =>
    props.isActive ? "GmarketSansTTFMedium" : "GmarketSansTTFLight"};
  line-height: 30px;
  cursor: pointer;
`;

interface IProps {
  isActive: boolean;
}

export default function LayoutNavigation() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();
  const onClickFreeBoard = () => {
    router.push("/boards2");
  };
  return (
    <Wrapper>
      <Menu isActive={true} onClick={onClickFreeBoard}>
        자유게시판
      </Menu>
      <Menu isActive={false}>중고마켓</Menu>
      <Menu isActive={false}>마이페이지</Menu>
    </Wrapper>
  );
}
