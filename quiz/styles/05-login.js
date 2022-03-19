import styled from "@emotion/styled";


export const Background = styled.div`
  width: 640px;
  height: 1138px;
  margin: 100px auto;
  background-image: url(../bg.png);
  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 181px 50px 83px 50px;
  background-color: rgba(0,0,0,0.1);
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100px;
  height: 100px;
  padding-bottom: 27px;
`;
export const Logo = styled.div`
  width: 100px;
  height: 100px;
  background-image: url("/login-state/logo.png");
  background-size: cover; 
  position: relative;
  top:-80px;
  left: -18px;


`;
export const LogoShadow = styled.div`
  width: 63px;
  height: 17px;
  background-image: url("/login-state/logo-shadow.png");
  background-size: cover;
  position: absolute;
`;

export const Title = styled.div`
  width: 100%;
  padding-bottom: 162px;
  font-size: 60px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export const LoginWrapper = styled.div`
  padding-top: 18px;
  width: 100%;
`;
export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 70px;
  `;

export const Input = styled.input`
  width: 100%;
  height: 70px;
  padding-right: 50px;
  background-color: transparent;
  border: none;
  border-bottom: solid 1px rgba(255,255,255,0.4);
  color: white;
  font-family: SpoqaHanSans;
  font-size: 24px;
`;

export const Delete = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 0;
  background-image: url("/login-state/delete.png");
  background-size: cover;
  position: absolute;
  right: 15px;
  top: 25px;
  cursor: pointer;

`;
export const Error = styled.div`
  width: 100%;
  height: 20px;
  margin: 10px 0 20px 0;
  font-size: 18px;
  color: #ff1b6d;
`;
export const LoginButton = styled.button`
  width: 100%;
  height: 76px;
  opacity: 0.6;
  margin-bottom: 44px;
  border-radius: 38px;
  background-color: #ff1b6d;
  border: 0 ;
  font-family: SpoqaHanSans;
  font-size: 26px;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 44px 73px 0 73px;
  margin-bottom: 61px;
`;
export const Button = styled.button`
background-color: transparent;
border: 0;
font-size: 20px;
color: white;
cursor: pointer;
`;
export const Split = styled.div`
  width: 1px;
  height: 12px;
  border: solid 1px rgba(255,255,255,0.4);
`;
export const KakaoWrapper = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 76px;
  background-color: transparent;
  border-radius: 38px;
  border: solid 2px #fae100;
  cursor: pointer;
`;
export const KakaoImg = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  background-size: cover;
  background-image: url("/login-state/kakao.png");
`;
export const KakaoText = styled.div`
 font-size: 26px;
  font-weight: bold;
  color: #fae100;
`;
