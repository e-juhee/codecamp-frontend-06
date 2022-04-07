import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 100px auto;
  padding: 50px;
  border: 1px solid gray;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 250px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 300px;
`;
export const Button = styled.button`
  margin-top: 10px;
  width: 250px;
  height: 30px;
  background-color: skyblue;
  border: 1px solid gray;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
`;
