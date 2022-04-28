import { memo } from "react";

function ChildrenPage(props: any) {
  console.log("<<자식 컴포넌트 렌더링>>");

  return (
    <div style={{ margin: "30px", border: "1px solid gray" }}>
      <h2>자식 컨테이너</h2>
    </div>
  );
}

export default memo(ChildrenPage);
