import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import { priceToStringWithoutWon } from "../../../../commons/libraries/utils";

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
  width: 500px;
  padding-right: 40px;
`;
const MenuItem = styled.div`
  font-size: 13px;
  cursor: pointer;
`;

const MENUS = [
  { name: "고객센터", page: "/login" },
  { name: "관심상품", page: "/login" },
  { name: "마이페이지", page: "/my" },
  // { name: "로그인", page: "/login" },
];
const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
      userPoint {
        amount
      }
    }
  }
`;
export default function LayoutHeader() {
  const router = useRouter();

  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const onClickMenu = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) router.push(e.target.id);
  };
  const [logoutUser] = useMutation(LOGOUT_USER);
  const onClickLogOut = async () => {
    try {
      await logoutUser();
      // router.reload();
      console.log("로그아웃성공");
      router.push("/products/new");
      location.reload();
    } catch (error) {
      console.log(error);
      console.log("로가웃실패");
    }
  };

  return (
    <Wrapper>
      <Menu>
        {accessToken && (
          <div>
            {data?.fetchUserLoggedIn?.name}님 포인트{" "}
            {priceToStringWithoutWon(
              data?.fetchUserLoggedIn?.userPoint?.amount
            )}
            P
          </div>
        )}

        {MENUS.map((el) => (
          <MenuItem key={el.name} id={el.page} onClick={onClickMenu}>
            {el.name}
          </MenuItem>
        ))}
        {accessToken ? (
          <MenuItem onClick={onClickLogOut}>로그아웃</MenuItem>
        ) : (
          <MenuItem id={"/login"} onClick={onClickMenu}>
            로그인
          </MenuItem>
        )}
      </Menu>
    </Wrapper>
  );
}
