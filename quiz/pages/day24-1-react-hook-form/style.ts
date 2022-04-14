import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 330px;
  height: 290px;
  margin: 100px auto;
  border: 1px solid gray;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  margin: 5px 0;
`;
export const Error = styled.div`
  color: red;
  height: 10px;
  font-size: 9px;
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 100%;
  padding-bottom: 10px;
`;
