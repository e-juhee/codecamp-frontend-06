import Head from "next/head";
import { useRouter } from "next/router";
import { Maybe } from "../../../../../commons/types/generated/types";
import * as S from "./styles";

declare const window: typeof globalThis & {
  // 원래 있던 window에 imp가 추가된다.
  IMP: any;
};

interface IPaymentProps {
  name: string | undefined;
  price: Maybe<number> | undefined;
}
export default function Payment(props: IPaymentProps) {
  const router = useRouter();
  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp51920511"); // 관리자 콘솔 > 시스템 설정 > 가맹점 식별 코드

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011", // 중복되면 안된다. 생략하면 임의로 생성된다.
        name: props.name,
        amount: props.price,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/products",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          router.push("http://localhost:3000/products");

          // Mutation 실행: 백엔드에 결제 관련 데이터 넘겨주기
          // ex) backend06 API 중, createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      {/* <ProductDetail requestPay={requestPay} /> */}
      <S.Button onClick={requestPay}>구매하기</S.Button>
    </>
  );
}
