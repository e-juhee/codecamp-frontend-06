import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 500px;
  margin: 50px auto;
  border-bottom: 1px solid gray;
`;
export const Title = styled.div`
  width: 800px;
  font-size: 50px;
  border-bottom: 1px solid gray;
`;
export const CreateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0;
  width: 800px;
`;
export const Input = styled.input`
  width: 700px;
  height: 50px;
`;
export const Create = styled.button`
  width: 70px;
  height: 50px;
  cursor: pointer;
`;
export const TasksWrapper = styled.div`
  width: 780px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  line-height: 50px;
  border: 1px solid gray;
`;
export const Index = styled.div`
  width: 50px;
  height: 50px;
  border-right: 1px solid gray;
`;
export const Contents = styled.div`
  width: 300px;
  height: 50px;
  border-right: 1px solid gray;
`;
export const IsComplete = styled.div`
  width: 100px;
  height: 50px;
  border-right: 1px solid gray;
`;
export const Date = styled.div`
  width: 100px;
  height: 50px;
  cursor: pointer;
`;
