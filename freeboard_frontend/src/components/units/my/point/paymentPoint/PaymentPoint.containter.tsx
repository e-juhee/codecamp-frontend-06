// import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Script from "next/script";
import { IPaymentProps } from "./PaymentPoint.types";
import * as S from "./PaymentPoint.styles";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./PaymentPoint.queries";

declare const window: typeof globalThis & {
  // 원래 있던 window에 imp가 추가된다.
  IMP: any;
};

export default function PaymentPoint(props: IPaymentProps) {
  const router = useRouter();
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN);

  console.log(data);
  // const router = useRouter();
  const requestPay = () => {
    if (props.price === 0) {
      alert("충전할 금액을 선택해주세요.");
      return;
    }

    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // 관리자 콘솔 > 시스템 설정 > 가맹점 식별 코드
    /* fetch user logged in */

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011", // 중복되면 안된다. 생략하면 임의로 생성된다.
        name: "포인트 충전",
        amount: props.price,
        buyer_email: data.fetchUserLoggedIn.email,
        buyer_name: data.fetchUserLoggedIn.name,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/products",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);

          try {
            const result = await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            props.setIsOpen((prev: boolean) => !prev);
            refetch();
            console.log(result);
          } catch (e) {
            if (e instanceof Error) alert(e.message);
          }

          router.push("http://localhost:3000/my");

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
      <Script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.12.4.min.js"
      ></Script>
      <Script
        type="text/javascript"
        src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
      ></Script>

      {/* <ProductDetail requestPay={requestPay} /> */}
      <S.Button onClick={requestPay} isActive={props.price}>
        충전하기
      </S.Button>
    </>
  );
}
