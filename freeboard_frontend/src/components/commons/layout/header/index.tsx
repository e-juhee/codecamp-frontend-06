import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 35px;
  background-color: white;

  width: 100%;
`;
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
  padding-right: 40px;
`;
const MenuItem = styled.div`
  font-size: 13px;
  cursor: pointer;
`;

const MENUS = [
  { name: "고객센터", page: "/login" },
  { name: "관심상품", page: "/login" },
  { name: "마이페이지", page: "/login" },
  { name: "로그인", page: "/login" },
];
export default function LayoutHeader() {
  const router = useRouter();

  const onClickMenu = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) router.push(e.target.id);
  };
  return (
    <Wrapper>
      <Menu>
        {MENUS.map((el) => (
          <MenuItem key={el.name} id={el.page} onClick={onClickMenu}>
            {el.name}
          </MenuItem>
        ))}
      </Menu>
    </Wrapper>
  );
}
