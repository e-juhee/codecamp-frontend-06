// import '../styles/globals.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBz6hMvq_xdr0pleEMuheZhsIew5LX_Zw",
  authDomain: "gboard-624df.firebaseapp.com",
  projectId: "gboard-624df",
  storageBucket: "gboard-624df.appspot.com",
  messagingSenderId: "775421735879",
  appId: "1:775421735879:web:0e842ff9fc4ebed7d51fe2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  // Component, pageProps는 Next.js가 처음에 넣어주는 데이터! Docs를 보고 타입(AppProps)을 지정해주면 된다.
  const client = new ApolloClient({
    uri: "http://backend06.codebootcamp.co.kr/graphql", // 백엔드 컴퓨터의 주소를 알려줌
    cache: new InMemoryCache(), // nMemoryCache에 저장한다. 메모리에 저장하면 컴퓨터를 껐다가 키면 날아감
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
