import styled from "@emotion/styled";
export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 100px 0 0 50px;
`;
export const TopTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  width: 300px;
  height: 30px;
  margin-top: 10px;
`;
export const Label = styled.div`
  width: 100px;
`;
export const Input = styled.input`
  width: 200px;
  border: none;
  border-bottom: 1px solid gray;
`;
export const Reset = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
`;
