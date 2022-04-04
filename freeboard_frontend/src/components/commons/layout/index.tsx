import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const BodyWrapper = styled.div`
  display: flex;
`;
const Body = styled.div`
  width: 1200px;
  margin: 0px auto;
`;

const HIDDEN_BANNER = [
  "/boards/[boardId]/edit",
  "/boards/[boardId]",
  "/boards/new",
];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  const isHiddenBanner = HIDDEN_BANNER.includes(router.pathname);

  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      <LayoutNavigation />
      <BodyWrapper>
        {/* app_tsx에서 Layout 컴포넌트 안에 Component가 있는 구조라서 props.children으로 부를 수 있다. */}
        <Body>{props.children}</Body>
      </BodyWrapper>
    </>
  );
}
