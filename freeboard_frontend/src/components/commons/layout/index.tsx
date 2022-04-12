import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Body = styled.div`
  width: 100%;
  margin: 0px auto;
`;

const HIDDEN_BANNER = [
  "/boards/[boardId]/edit",
  "/boards/[boardId]",
  "/boards/new",
  "/",
  "/boards/covid-seoul",
  "/login",
  "/join",
];
const HIDDEN_NAV = ["/"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.pathname);
  const isHiddenNav = HIDDEN_NAV.includes(router.pathname);

  return (
    <>
      <LayoutHeader />
      {!isHiddenNav && <LayoutNavigation />}
      {!isHiddenBanner && <LayoutBanner />}

      <BodyWrapper>
        {/* app_tsx에서 Layout 컴포넌트 안에 Component가 있는 구조라서 props.children으로 부를 수 있다. */}
        <Body>{props.children}</Body>
      </BodyWrapper>
    </>
  );
}
