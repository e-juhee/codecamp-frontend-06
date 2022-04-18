import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 800px;
  margin: 50px auto;
`;

export const LabelRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 30px;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  background-color: lightgray;
  text-align: center;
  font-weight: 700;
`;
export const LabelWriter = styled.div`
  width: 80px;
  font-weight: 700;
`;
export const LabelTitle = styled.div`
  width: 240px;
  font-weight: 700;
`;
export const LabelContents = styled.div`
  width: 480px;
  font-weight: 300;
  font-weight: 700;
`;

export const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  border-bottom: 1px solid lightgray;
  text-align: center;
  overflow: hidden;
`;

export const Writer = styled.div`
  width: 80px;
  height: 20px;
`;
export const Title = styled.div`
  width: 240px;
  font-weight: 700;
  height: 20px;
`;
export const Contents = styled.div`
  width: 480px;
  font-weight: 300;
  height: 20px;
`;
export const DeleteButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 800px;
  height: 300px;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid lightgray;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 500px;
`;
export const Label = styled.div`
  font-weight: 500;
`;

export const ShortInput = styled.input`
  width: 150px;
  border: 1px solid gray;
`;
export const TitleInput = styled.input`
  width: 425px;
  border: 1px solid gray;
`;
export const ContentInput = styled.textarea`
  width: 425px;
  height: 120px;
`;

export const CreateButton = styled.button`
  width: 100px;
  height: 30px;
`;
