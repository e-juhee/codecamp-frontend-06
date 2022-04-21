export default function EventLoopPage() {
  /* // 복습
  setTimeout(() => {
    console.log("안녕하세요"); // 1초 후 실행
  }, 1000);
  setInterval(() => {
    document.getElementById("timer")?.innerText = "59:30";
  }, 1000);
  */

  const onClickTimer = () => {
    console.log("==========시작==========");

    setTimeout(() => {
      // CallStack이 비워져야 실행된다.
      console.log("0초 뒤에 실행될 거예요.");
    }, 0);

    let sum = 0;
    for (let i = 0; i <= 9000000000; i += 1) {
      // 이 for문이 다~~~ 끝나야 setTimeout이 실행된다.
      sum = sum + 1;
    }
    console.log("==========!끝!==========");
  };

  return <button onClick={onClickTimer}>setTimeout 실행시키기</button>;
}
