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
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

interface IApolloProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState); // Global State
  // const [, setUserInfo] = useRecoilState(userInfoState);

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
    /* 기존에 accessToken을 localStorage에 넣어주던 부분 */
    // const accessToken = localStorage.getItem("accessToken");
    // setAccessToken(accessToken || "");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setUserInfo(userInfo);

    /* accessToken 재발급 받아서 state에 넣어주기 */
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // operation : 방금 실패한 쿼리, 재요청할 때 쓴다.
  // forward: operation 전송
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    /* 1-1. 에러를 캐치한다. */
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지를 확인한다. (UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          /* 2-1. refreshToken으로 accessToken을 재발급 받는다. */
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 토큰을 globalState에 저장한다.
            setAccessToken(newAccessToken);

            /* 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리를 재요청한다. */
            // 쿼리의 추가옵션(header 등)을 가져오거나(getContext) 바꿀 수(setContext) 있다.
            operation.setContext({
              headers: {
                ...operation.getContext().headers, // headers에 Authorization 이외에 다른 게 있다면 남겨두기 위해 getContext로 받아온 것을 함께 넣어준다.
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            // 3-2. 변경된 operation을 재요청한다.
            return forward(operation);
          });
        }
      }
    }
  });

  // GraphQL API는 여기를 거쳐서 간다.
  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql", // 백엔드 컴퓨터의 주소를 알려줌
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // errorLink를 추가했다.
    cache: new InMemoryCache(), // inMemoryCache에 저장한다. 메모리에 저장하면 컴퓨터를 껐다가 키면 날아감
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
