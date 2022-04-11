import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FirebasePage() {
  /* 데이터 등록 */
  const onClickSubmit = async () => {
    // firebaseApp: _app.tsx에서 가져옴
    // board: collection이다. 존재하지 않은 collection을 입력하면 자동으로 생성된다. (NoSQL의 장점)
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, {
      writer: "철수",
      title: "제목입니다",
      contents: "내용이에요",
    });
  };

  /* 데이터 조회 */
  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };

  return (
    <>
      <div>파이어베이스 연습</div>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
