import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background-color: #bdbbbb;
  padding: 0 500px;
`;

interface IProps {
  isActive: boolean;
}
const Menu = styled.div`
  height: 30px;
  font-weight: 700;
  font-size: 18px;
  font-family: ${(props: IProps) =>
    props.isActive ? "GmarketSansTTFMedium" : "GmarketSansTTFLight"};
  line-height: 30px;
  cursor: pointer;
  :hover {
    color: #00008b;
  }
`;

export default function LayoutNavigation() {
  const router = useRouter();
  const onClickLink = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) router.push(e.target.id);
  };
  return (
    <Wrapper>
      <Menu isActive={true} id={"/boards"} onClick={onClickLink}>
        자유게시판
      </Menu>
      <Menu isActive={false} id={"/market"} onClick={onClickLink}>
        중고마켓
      </Menu>
      <Menu isActive={false} id={"/myPage"} onClick={onClickLink}>
        마이페이지
      </Menu>
    </Wrapper>
  );
}
