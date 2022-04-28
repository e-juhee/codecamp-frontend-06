import MemoizationPresenterPage from "./presenter";

import { useCallback, useMemo, useState } from "react";

export default function MemoizationContainerPage() {
  console.log("렌더링");

  let countLet = 0;
  const [countState, setCountState] = useState(0); // 렌더링이 일어나면 훅을 제외한 모든 것이 다시 만들어진다.(자식도 다시 만들어진다.)

  const aaa = useMemo(() => Math.random(), []);
  // const aaa = useMemo(() => Math.random(), [countState]);
  // dependency array에 적은 내용이 바뀌면 다시 렌더링된다.

  console.log(aaa);

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // const onClickCountState = useCallback(() => {
  //   // console.log(countState);
  //   setCountState((prev) => prev + 1);
  // }, []);

  /* useMemo로 useCallback 만들어보기 */
  const onClickCountState = useMemo(() => {
    // useMemo는 return하는 값을 기억한다.
    // return이 함수라면? => 값이 기억된다.
    // return () => setCountState(countState + 1);

    // 아래처럼 써야 state가 바뀐다.
    return () => setCountState((prev) => prev + 1);
  }, []);

  return (
    <div>
      <div>======================</div>

      <h1>이것은 컨테이너입니다.</h1>
      <div>카운트(let):{countLet}</div>
      <button onClick={onClickCountLet}>카운트(let)+1 올리기!!!</button>
      <div>카운트(state):{countState}</div>

      {/* 함수를 이렇게도 쓸 수 있다.
      이렇게하면 리턴할 때마다 새로 만들어지니까??
      가급적이면 callback을 이용하자! */}
      {/* <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(state)+1 올리기!!!
      </button> */}
      <button onClick={onClickCountState}>카운트(state)+1 올리기!!!</button>
      <div>======================</div>
      <MemoizationPresenterPage countState={countState} />

      {/* props가 꼭 필요한 상황에만 넘겨줘야 메모가 유지된다! 안그러면 바뀔 때마다 리렌더링이 일어나서 의미가 없다. */}
    </div>
  );
}
