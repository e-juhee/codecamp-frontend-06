export default function HofPage() {
  // @ts-ignore
  const onClickChild = (el) => (event) => {
    // closure에 의해서 el과 event 둘 다 사용할 수 있다.
    // 여러개를 더 추가하는 것도 가능하다.
    console.log(el);
  };

  return (
    <div>
      <h1>HOF 연습 페이지입니다!!!</h1>
      {["철수", "영희", "훈이"].map((el) => (
        <div key={el} onClick={onClickChild(el)}>
          {el}
        </div>
      ))}
    </div>
  );
}
