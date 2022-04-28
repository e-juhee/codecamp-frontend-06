import { useCallback, useMemo, useState } from "react";
import ChildrenPage from "./children.container";

export default function MemoizationContainerPage() {
  console.log("<<컨테이너 렌더링>>");

  let countLet = useMemo(() => 0, []);
  const [countState, setCountState] = useState(0); // 렌더링이 일어나면 훅을 제외한 모든 것이 다시 만들어진다.(자식도 다시 만들어진다.)

  /* useCallback */
  const onClickCountLetCallback = useCallback(() => {
    console.log("let : " + Number(countLet + 1)); // 증가된 결과
    countLet += 1;
  }, []);
  const onClickCountStateCallback = useCallback(() => {
    setCountState((prev) => {
      console.log("state : " + Number(prev + 1));
      return prev + 1;
    });
  }, []);

  /* useMemo */
  const onClickCountLet = useMemo(
    () => () => {
      console.log("let : " + Number(countLet + 1)); // 증가된 결과
      countLet += 1;
    },
    []
  );
  const onClickCountState = useMemo(
    () => () => {
      setCountState((prev) => {
        console.log("state : " + Number(prev + 1));
        return prev + 1;
      });
    },
    []
  );

  return (
    <div>
      <h1>부모 컨테이너</h1>
      <div>let : {countLet}</div>
      <button onClick={onClickCountLet}>let 변수 + 1</button>
      <div>state : {countState}</div>
      <button onClick={onClickCountState}>state +1</button>
      <button onClick={() => setCountState((prev) => prev + 1)}>
        state +1
      </button>
      <ChildrenPage />
    </div>
  );
}
