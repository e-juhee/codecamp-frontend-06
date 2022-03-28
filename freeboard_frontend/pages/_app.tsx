import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  //Component, pageProps는 Next.js가 처음에 넣어주는 데이터! Docs를 보고 타입(AppProps)을 지정해주면 된다.
  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql", //백엔드 컴퓨터의 주소를 알려줌
    cache: new InMemoryCache(), //inMemoryCache에 저장한다. 메모리에 저장하면 컴퓨터를 껐다가 키면 날아감
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
