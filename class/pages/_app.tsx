import "antd/dist/antd.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
// import "../styles/globals.css";
import { globalStyles } from "../src/commons/styles/globalStyles";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { createUploadLink } from "apollo-upload-client";
import { RecoilRoot } from "recoil";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-aF3aMmqa2eYU4-a9QJ5MQRISann46pc",
  authDomain: "gproject2-c460e.firebaseapp.com",
  projectId: "gproject2-c460e",
  storageBucket: "gproject2-c460e.appspot.com",
  messagingSenderId: "85331727249",
  appId: "1:85331727249:web:1c15416e4821c298474030",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql", // 백엔드 컴퓨터의 주소를 알려줌
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(), // inMemoryCache에 저장한다. 메모리에 저장하면 컴퓨터를 껐다가 키면 날아감
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
