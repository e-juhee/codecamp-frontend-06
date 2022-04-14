import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";

import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../commons/store";

interface IApolloProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);

  /* 첫번째 방법 : 더이상 지원되지 않는다. */
  // if (process.browser) {
  //   const myLocalStorageAccessToken = localStorage.getItem("accessToken");
  //   setAccessToken(myLocalStorageAccessToken || "");
  // } else {
  //   console.log("여기는 프론트엔드 서버이다!(yarn dev)");
  // }

  /* 두번째 방법 */
  if (typeof window !== "undefined") {
    // 브라우저에서 실행되고 있을 때를 의미한다.
    console.log("여기는 브라우저다!");
    // const myLocalStorageAccessToken = localStorage.getItem("accessToken");
    // setAccessToken(myLocalStorageAccessToken || "");
  } else {
    // 브라우저가 아닌 프론트엔드 서버에서 실행될 때를 의미한다.
    console.log("여기는 프론트엔드 서버이다!(yarn dev)");
  }

  /* 세번째 방법 */
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setAccessToken(accessToken || "");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    setUserInfo(userInfo);
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql", // 백엔드 컴퓨터의 주소를 알려줌
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(), // inMemoryCache에 저장한다. 메모리에 저장하면 컴퓨터를 껐다가 키면 날아감
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
