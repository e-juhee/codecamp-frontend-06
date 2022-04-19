import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { Modal, Button } from "antd";
import { useState } from "react";
import * as S from "./styles";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;
interface IData {
  email: string;
  password: string;
}

export default function MainPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [loginUser] = useMutation(LOGIN_USER);
  const onClickSubmit = async (data: IData) => {
    try {
      const result = await loginUser({
        variables: { ...data },
      });
      const basket = JSON.parse(localStorage.getItem("basket") || "[]");
      if (basket.length) {
        setIsModal(true);
      } else {
        alert("로그인되었습니다. 장바구니에 담긴 게시물이 없습니다.");
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const [isModal, setIsModal] = useState(false);
  const handleOk = () => {
    setIsModal((prev) => !prev);
    router.push("./basket");
  };
  const handleCancel = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <>
      <S.Wrapper onSubmit={handleSubmit(onClickSubmit)}>
        <S.TopTitle>로그인</S.TopTitle>
        <S.InputWrapper>
          <S.Label>아이디</S.Label>
          <S.Input type="text" {...register("email")} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Input type="password" {...register("password")} />
        </S.InputWrapper>
        <S.Reset>로그인</S.Reset>
      </S.Wrapper>

      <Modal
        visible={isModal}
        title="로그인 성공"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            취소
          </Button>,
          <Button key="link" type="primary" onClick={handleOk}>
            이동하기
          </Button>,
        ]}
      >
        <p>비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?</p>
      </Modal>
    </>
  );
}
