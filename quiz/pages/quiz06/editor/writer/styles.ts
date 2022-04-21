import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 800px;
  margin: 100px auto;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const ShortInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
export const Label = styled.div`
  width: 80px;
  text-align: center;
`;
export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid gray;
`;
export const ShortInput = styled.input`
  width: 40%;
  border: none;
  border-bottom: 1px solid gray;
`;
export const Button = styled.button`
  margin-top: 50px;
  width: 200px;
  height: 50px;
  font-weight: 700;
  font-size: 18px;
`;
