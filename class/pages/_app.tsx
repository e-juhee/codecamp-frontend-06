import "antd/dist/antd.css";
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql", // 백엔드 컴퓨터의 주소를 알려줌
    cache: new InMemoryCache(), // inmemorycache에 저장한다. 메모리에 저장하면 컴퓨터를 껐다가 키면 날아감
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
