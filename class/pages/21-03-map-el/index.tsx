export default function MapElPage() {
  // 1. 기본 방법
  ["철수", "영희", "훈이"].forEach((el, i) =>
    console.log("el: ", el, "index: ", i)
  );

  // 2. 매개변수 바꿔보기
  ["철수", "영희", "훈이"].forEach((aaa, qqq) =>
    console.log("el: ", aaa, "index: ", qqq)
  );

  // 3. 함수 선언식으로 바꿔보기
  ["철수", "영희", "훈이"].forEach(function (aaa, qqq) {
    console.log("el: ", aaa, "index: ", qqq);
  });

  // 4. el과 index 바꿔보기
  ["철수", "영희", "훈이"].forEach((index, el) =>
    console.log("el: ", el, "index: ", index)
  );
  return <div>el 알아보기</div>;
}
