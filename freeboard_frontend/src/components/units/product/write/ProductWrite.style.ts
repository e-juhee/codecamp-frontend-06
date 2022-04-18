import styled from "@emotion/styled";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 1024px;
  height: 1000px;
  margin: 100px auto;
`;

export const Error = styled.div`
  color: red;
  font-size: 11px;
`;

export const Title = styled.div`
  font-size: 26px;
  font-family: "NanumSquareR";
  padding-bottom: 30px;
  border-bottom: 2px solid rgb(30, 29, 41);
`;
export const Label = styled.div`
  font-family: "NanumSquareR";
  font-size: 18px;
  width: 168px;
`;

export const ImageUpload = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: rgb(195, 194, 204);
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgb(220, 219, 228);
  padding: 2rem 0px;
`;
export const Input = styled.input`
  border: 1px solid rgb(195, 194, 204);
  width: 856px;
  height: 46px;
  padding: 0px 1rem;
`;
export const TextArea = styled.textarea`
  border: 1px solid rgb(195, 194, 204);
  width: 856px;
  height: 166px;
  padding: 1rem;
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Button = styled.button`
  width: 170px;
  font-size: 20px;
  padding: 15px 0;
  color: white;
  border: none;
  background-color: black;
  border-radius: 3px;
`;
