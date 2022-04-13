import { SearchOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Fragment, MouseEvent, useState } from "react";

const Wrapper = styled.div`
  position: fixed;
  z-index: 2;
  top: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  width: 100%;
  border-top: 1px solid #dad7d7;
  border-bottom: 1px solid #dad7d7;
  background-color: white;
  padding: 0 40px;
`;
const Title = styled.div`
  font-size: 28px;
  font-family: "GmarketSansTTFBold";
  cursor: pointer;
`;
interface IProps {
  isActive: boolean;
}
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;
const Menu = styled.div`
  height: 30px;
  font-weight: 700;
  font-size: 15px;
  font-family: ${(props: IProps) =>
    props.isActive ? "GmarketSansTTFMedium" : "GmarketSansTTFLight"};
  line-height: 30px;
  cursor: pointer;
  :hover {
    color: #00008b;
  }
`;
const Search = styled(SearchOutlined)`
  font-size: 25px;
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
  const onClickTitle = () => {
    router.push("/boards");
  };
  return (
    <Wrapper>
      <Title onClick={onClickTitle}>Gboard</Title>

      <MenuWrapper>
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
        <Search />
      </MenuWrapper>
    </Wrapper>
  );
}
