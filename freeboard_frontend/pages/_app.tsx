import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { Global } from "@emotion/react";
import "antd/dist/antd.css";
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";
import Script from "next/script";

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

  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Script
            src="//dapi.kakao.com/v2/maps/sdk.js?appkey=0f8eaab205858289af49e81c538882e4&libraries=services,clusterer&autoload=false"
            strategy="beforeInteractive"
          />
          {/* Component가 Layout 컴포넌트의 props.children  --> layout/index.tsx에서 씀 */}
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
