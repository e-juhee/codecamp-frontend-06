import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment, MouseEvent, useState } from "react";

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

const NAVIGATION_MENUS = [
  { name: "자유게시판", page: "/boards" },
  { name: "TODO", page: "/todo" },
  { name: "COVID19", page: "/covid" },
];

export default function LayoutNavigation() {
  const router = useRouter();
  const [isActive, setIsActive] = useState("/boards");
  const onClickLink = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) {
      router.push(e.target.id);
      setIsActive(e.target.id);
    }
  };
  return (
    <Wrapper>
      {NAVIGATION_MENUS.map((el) => (
        <Fragment key={el.page}>
          <Menu
            isActive={isActive === el.page}
            id={el.page}
            onClick={onClickLink}
          >
            {el.name}
          </Menu>
        </Fragment>
      ))}
    </Wrapper>
  );
}
