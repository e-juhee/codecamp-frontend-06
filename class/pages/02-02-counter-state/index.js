import { useState } from "react"; // 리액트에서 제공해주는 기능

export default function CounterStatePage() {
  const [count, setCount] = useState(0);

  function counter() {
    setCount(count + 1); // 안에 들어가는 값으로 바뀜
  }

  return (
    <>
      <div>{count}</div> {/* 초기값인 0이 들어감 */}
      <button onClick={counter}>카운트 올리기</button>
    </>
  );
}
