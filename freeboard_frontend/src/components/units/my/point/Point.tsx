import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { MouseEvent, useState } from "react";
import PaymentPoint from "./paymentPoint/PaymentPoint.containter";
import { FETCH_USER_LOGGED_IN } from "./paymentPoint/PaymentPoint.queries";
import * as S from "./Point.styles";
export default function Point() {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const onClickPoint = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCancel = () => {
    setIsOpen((prev) => !prev);
    setPrice(0);
  };

  const onClickPrice = (e: MouseEvent<HTMLButtonElement>) => {
    setPrice((prev) => prev + Number((e.target as HTMLButtonElement).id));
  };

  const onClickReset = () => {
    setPrice(0);
  };
  // 현재 포인트
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  return (
    <>
      <S.Button onClick={onClickPoint}>포인트 충전</S.Button>
      {isOpen && (
        <Modal
          title="포인트 충전"
          visible={true}
          onCancel={handleCancel}
          width={400}
          footer={[]}
        >
          <S.ModalWrapper>
            <S.PayLabel>충전 금액</S.PayLabel>
            <S.PayPrice>{price}원</S.PayPrice>
            <S.ResetPrice onClick={onClickReset}>초기화</S.ResetPrice>

            <S.PriceButtonWrapper>
              <S.PriceButton onClick={onClickPrice} id="100">
                + 100원
              </S.PriceButton>
              <S.PriceButton onClick={onClickPrice} id="500">
                + 500원
              </S.PriceButton>
              <S.PriceButton onClick={onClickPrice} id="2000">
                + 2,000원
              </S.PriceButton>
              <S.PriceButton onClick={onClickPrice} id="5000">
                + 5,000원
              </S.PriceButton>
            </S.PriceButtonWrapper>

            <S.PointWrapper>
              <S.Label>현재 포인트</S.Label>
              <S.Price>{data?.fetchUserLoggedIn.userPoint.amount || 0}</S.Price>
            </S.PointWrapper>
            <S.PointWrapper>
              <S.Label>충전 포인트</S.Label>
              <S.Price>{price}</S.Price>
            </S.PointWrapper>
            <S.Split></S.Split>
            <S.PointWrapper>
              <S.BoldLabel>충전 후 포인트</S.BoldLabel>
              <S.BoldPrice>
                {data?.fetchUserLoggedIn.userPoint.amount + price || 0}
              </S.BoldPrice>
            </S.PointWrapper>
            {/* username 보내기 */}
            <PaymentPoint price={price} setIsOpen={setIsOpen} />
          </S.ModalWrapper>
        </Modal>
      )}
    </>
  );
}
