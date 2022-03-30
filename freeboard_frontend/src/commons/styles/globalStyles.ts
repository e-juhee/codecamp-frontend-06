import { css } from "@emotion/react";
export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: "NanumSquareL", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }

  @font-face {
    font-family: "GmarketSansTTFBold";
    src: url(/fonts/GmarketSansTTFBold.ttf); // /는 public
  }
  @font-face {
    font-family: "GmarketSansTTFMedium";
    src: url(/fonts/GmarketSansTTFMedium.ttf); // /는 public
  }
  @font-face {
    font-family: "GmarketSansTTFLight";
    src: url(/fonts/GmarketSansTTFLight.ttf); // /는 public
  }
  @font-face {
    font-family: "NanumSquareEB";
    src: url(/fonts/NanumSquareEB.ttf); // /는 public
  }
  @font-face {
    font-family: "NanumSquareL";
    src: url(/fonts/NanumSquareL.ttf); // /는 public
  }
  @font-face {
    font-family: "NanumSquareR";
    src: url(/fonts/NanumSquareR.ttf); // /는 public
  }
`;
