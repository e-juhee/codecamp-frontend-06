import styled from "@emotion/styled";
export const Wrapper = styled.div`
  width: 1024px;
  border-top: 1px solid gray;
  margin: 100px auto;
  padding-top: 30px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Image = styled.img`
  width: 428px;
  height: 428px;
  object-fit: cover;
  margin-bottom: 40px;
  margin-right: 60px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Name = styled.div`
  font-size: 30px;
  font-family: "GmarketSansTTFBold";
  margin-bottom: 10px;
`;
export const Price = styled.div`
  width: 100%;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Remarks = styled.div`
  color: rgb(204, 204, 204);
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 10px;
  padding-top: 20px;
  border-top: 1px solid rgb(238, 238, 238);
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Button = styled.button`
  width: 32%;
  height: 60px;
  border: none;
  color: white;
  font-family: "NanumSquareEB";
  font-size: 18px;
  background: rgb(204, 204, 204);
`;
