import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";

import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

interface IApolloProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    const myLocalStorageAccessToken = localStorage.getItem("accessToken");
    setAccessToken(myLocalStorageAccessToken || "");
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
