import * as S from "./Login.style";
import { ILoginUIProps } from "./Login.types";

export default function LoginUI(props: ILoginUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.Logo>로고자리</S.Logo>
        <S.InputWrapper>
          <S.Label>이메일 주소</S.Label>
          <S.Input onChange={props.onChangeEmail}></S.Input>
          <S.InputError>{props.emailErrorMessage}</S.InputError>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호</S.Label>
          <S.Input type="password" onChange={props.onChangePassword}></S.Input>
          <S.InputError>{props.passwordErrorMessage}</S.InputError>
        </S.InputWrapper>
        <S.SaveID onClick={props.onClickSaveID}>
          {props.isChecked ? <S.FilledCheckIcon /> : <S.CheckIcon />}
          로그인 상태 유지
        </S.SaveID>
        <S.LoginButton onClick={props.onClickLogin} isActive={props.isActive}>
          로그인
        </S.LoginButton>
        <S.SubButtonWrapper>
          <S.SubButton>이메일 가입</S.SubButton>
          <div>|</div>
          <S.SubButton>이메일 찾기</S.SubButton>
          <div>|</div>
          <S.SubButton>비밀번호 찾기</S.SubButton>
        </S.SubButtonWrapper>
      </S.Wrapper>
    </>
  );
}
