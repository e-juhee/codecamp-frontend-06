import { css } from "@emotion/react";
export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    /* font-size: 30px; */
    /* font-family: "myFont"; */
  }
  // 폰트 만들기
  @font-face {
    font-family: "myFont";
    src: url(/fonts/scifibit.ttf); // /는 public
  }
`;
