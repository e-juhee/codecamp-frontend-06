import LayoutBanner from "./banner";
// import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const BodyWrapper = styled.div`
  display: flex;
`;
const Body = styled.div`
  height: 100%;
`;
// const LayoutSidebar = styled.div`
//   width: 100px;
//   height: 500px;
//   background-color: orange;
// `;
const HIDDEN_HEADERS = ["/12-05-modal-refactoring", "/12-01-modal-alert"];

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        {/* <LayoutSidebar>사이드바 영역</LayoutSidebar> */}
        <Body>{props.children}</Body>
      </BodyWrapper>
      {/* <LayoutFooter /> */}
    </>
  );
}
