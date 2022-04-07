// import '../styles/globals.css';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { initializeApp } from "firebase/app";
import { createUploadLink } from "apollo-upload-client";

const firebaseConfig = {
  apiKey: "AIzaSyDBz6hMvq_xdr0pleEMuheZhsIew5LX_Zw",
  authDomain: "gboard-624df.firebaseapp.com",
  projectId: "gboard-624df",
  storageBucket: "gboard-624df.appspot.com",
  messagingSenderId: "775421735879",
  appId: "1:775421735879:web:0e842ff9fc4ebed7d51fe2",
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  // Component, pageProps는 Next.js가 처음에 넣어주는 데이터! Docs를 보고 타입(AppProps)을 지정해주면 된다.
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        {/* Component가 Layout 컴포넌트의 props.children  --> layout/index.tsx에서 씀 */}
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
