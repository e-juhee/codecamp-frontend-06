import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
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
  "/boards2/[boardId]/edit",
  "/boards2/[boardId]",
  "/boards2/new",
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
        <Body>{props.children}</Body>
      </BodyWrapper>
    </>
  );
}
