// import {
//   collection,
//   getFirestore,
//   addDoc,
//   getDocs,
//   DocumentData,
// } from "firebase/firestore/lite";
// import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
// import { firebaseApp } from "../_app";
// import * as S from "./todo.style";

// export default function FirebasePage() {
//   // const [contentsList, setContentsList] = useState<DocumentData[]>([]);
//   // const [dateList, setDateList] = useState<DocumentData[]>([]);
//   // const [isCompleteList, setIsCompleteList] = useState<DocumentData[]>([]);
//   const [input, setInput] = useState<SetStateAction<string>>();
//   const [dataTasks, setDataTasks] = useState<DocumentData[]>([]);

//   const onClickCreate = async () => {
//     const tasks = collection(getFirestore(firebaseApp), "tasks"); // collection 안 만들었어도 알아서 추가됨
//     const month = new Date().getMonth() + 1;
//     const day = new Date().getDate();
//     const today = `${month}월 ${day}일`;

//     await addDoc(tasks, {
//       contents: input,
//       date: today,
//       isComplete: false,
//     });
//   };

//   useEffect(() => {
//     async function fetchTasks() {
//       const tasks = collection(getFirestore(firebaseApp), "tasks"); // collection 안 만들었어도 알아서 추가됨
//       const result = await getDocs(tasks);
//       const data = result?.docs.map((el) => el.data());
//       setDataTasks(data);
//     }
//     fetchTasks();
//   }, []);

//   const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };
//   return (
//     <>
//       <S.Wrapper>
//         <S.Title>{} Tasks</S.Title>
//         <S.CreateWrapper>
//           <S.Input onChange={onChangeInput}></S.Input>
//           <S.Create onClick={onClickCreate}>+</S.Create>
//         </S.CreateWrapper>

//         {dataTasks?.map((el: any, index: number) => (
//           <S.TasksWrapper key={index}>
//             <S.Index>{index + 1}</S.Index>
//             <S.Contents>{el.contents}</S.Contents>
//             <S.IsComplete>{el.isComplete ? "완료" : "진행중"}</S.IsComplete>
//             <S.Date>{el.date}</S.Date>
//           </S.TasksWrapper>
//         ))}
//       </S.Wrapper>
//     </>
//   );
// }
