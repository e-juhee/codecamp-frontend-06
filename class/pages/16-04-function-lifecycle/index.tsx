import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router"; // useRouter 이런 거 없음. Router를 통째로 import ㄱㄱ

export default function CounterPage() {
  const router = useRouter();
  // inputRef = createRef<HTMLInputElement>(); // ref : 태그를 변수에 넣어놓고 다닌다.
  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState(0);

  // // 화면에 렌더되고 실행된다.
  // componentDidMount() {
  //   console.log("마운트됨!");
  //   // 활용: 포커스 깜빡깜빡
  //   this.inputRef.current?.focus();
  // }
  /* 1. DidMount */
  // useEffect(() => {
  //   console.log("마운트됨!");
  //   inputRef.current?.focus();
  // }, []);

  // useEffect는 한번 렌더 되고 나서 실행되기 때문에 이게 제일 먼저 실행된다.

  // // 리렌더 될 때 실행된다. (counter가 증가할 때)
  // componentDidUpdate() {
  //   console.log("수정되고 다시 그려짐!");
  // }
  /* 2. DidUpdate : 처음에도 한번 실행된다. */
  useEffect(() => {
    console.log("수정되고 다시 그려짐!");
  });

  useEffect(() => {
    console.log("수정되고 다시 그려짐!");
  }, [count]);
  // 대괄호: 의존성 배열 (Dependency Array)
  // (이 함수가 실행될 지 안 될지를 의존하고 있다)
  // 1) 배열이 비어있으면 한번 실행되고 끝난다. = componentDidMount
  // 2) 배열이 아예 없으면 뭐가 바뀌든 실행된다.
  // 3) 배열에 변수가 들어있으면 처음에 한번과 해당 변수가 바뀌었을 때 실행된다.

  // // 화면에서 사라질 때
  // componentWillUnmount() {
  //   console.log("컴포넌트 사라짐!");
  //   // 활용: 나가기 버튼을 누르지 않고 다른 메뉴를 눌러서 채팅방을 나갔을 경우, 채팅방 나가기 api 요청
  // }
  /* 3. WillUnmount */
  // useEffect(() => {
  //   return () => {
  //     console.log("컴포넌트 사라짐!");
  //   };
  // });

  /* 4. DidMount와 WillUnmount 합치기 : 처음에는 실행되지 않는다. */
  useEffect(() => {
    console.log("마운트됨!");
    inputRef.current?.focus();
    return () => {
      console.log("컴포넌트 사라짐!");
    };
  }, []);

  /* 5. useEffect의 잘못된 사용 예 */
  // 1) 추가렌더링
  // 화면이 렌더되고 나서 useEffect가 실행되는데, 안에서 setState로 인해서 렌더링이 한번 더 일어나게 된다.
  useEffect(() => {
    setCount(10); // 불필요한 추가 렌더링을 발생시킨다. useEffect에서 setState는 자제하자.
  }, []);

  // 2) 무한루프
  // useEffect(() => {
  //   setCount((prev) => prev + 1); // 무한루프에 빠진다! count가 바뀌면 useEffect가 실행되고, count가 또 바뀌고, useEffect가 또 실행되고 ...
  // }, [count]);

  const onClickCounter = () => {
    console.log("온클릭카운터 실행!");
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  console.log("나는 언제 실행되게~?"); // useEffect는 한번 렌더 되고 나서 실행되기 때문에 이게 제일 먼저 실행된다.
  console.log("useEffect보다 이게 먼저 실행됨");

  return (
    <div>
      {/* 이 태그에 aaa를 연결 */}
      <input type="text" ref={inputRef} />
      <div>현재 카운트 {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!</button>
      <button onClick={onClickMove}>나가기!!!</button>
    </div>
  );
}
