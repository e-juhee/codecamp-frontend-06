import styled from "@emotion/styled";
import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { ChangeEvent, SetStateAction, useState } from "react";
import { firebaseApp } from "../../_app";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 500px;
  margin: 50px auto;
  border-bottom: 1px solid gray;
`;
const Title = styled.div`
  width: 800px;
  font-size: 50px;
  border-bottom: 1px solid gray;
`;
const CreateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px 0;
  width: 800px;
`;
const Input = styled.input`
  width: 700px;
  height: 50px;
`;
const Create = styled.button`
  width: 70px;
  height: 50px;
  cursor: pointer;
`;
export default function FirebasePage() {
  const [contentsList, setContentsList] = useState<SetStateAction<string[]>>(
    []
  );
  const [dateList, setDateList] = useState<SetStateAction<string[]>>([]);
  const [isCompleteList, setIsCompleteList] = useState<
    SetStateAction<boolean[]>
  >([]);
  const [input, setInput] = useState<SetStateAction<string>>();

  const onClickCreate = async () => {
    // firebase에 데이터 한 줄 등록하기
    const todo = collection(getFirestore(firebaseApp), "todo"); // collection 안 만들었어도 알아서 추가됨
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const today = `${month}월 ${day}일`;

    await addDoc(todo, {
      contents: input,
      date: today,
      isComplete: false,
      index: 3,
    });
    const result = await getDocs(todo);
    const data = result?.docs.map((el) => el.data());
    console.log(data);
    setContentsList(data.map((el) => el.contents));
    setDateList(data.map((el) => el.date));
    setIsCompleteList(data.map((el) => el.isComplete));
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <Wrapper>
        <Title>{} Tasks</Title>
        <CreateWrapper>
          <Input onChange={onChangeInput}></Input>
          <Create onClick={onClickCreate}>+</Create>
        </CreateWrapper>
        {contentsList.map((el: string, index: number) => (
          <div key={index}>{el}</div>
        ))}
        {dateList.map((el: string, index: number) => (
          <div key={index}>{el}</div>
        ))}
        {isCompleteList.map((el: boolean, index: number) => (
          <div key={index}>{el}</div>
        ))}
      </Wrapper>
    </>
  );
}
