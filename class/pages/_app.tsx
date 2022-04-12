import "antd/dist/antd.css";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

const firebaseConfig = {
  apiKey: "AIzaSyB-aF3aMmqa2eYU4-a9QJ5MQRISann46pc",
  authDomain: "gproject2-c460e.firebaseapp.com",
  projectId: "gproject2-c460e",
  storageBucket: "gproject2-c460e.appspot.com",
  messagingSenderId: "85331727249",
  appId: "1:85331727249:web:1c15416e4821c298474030",
};

export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
