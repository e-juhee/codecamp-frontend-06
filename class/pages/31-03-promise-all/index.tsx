export default function PromiseAllPage() {
  // Promise: 하나씩 진행된다.
  const onClickPromise = async () => {
    /* 시간을 확인하는 방법 */
    // performance.now();
    console.time("Promise 요청");

    // Promise는 오래 걸리는 작업이기 때문에 Queue로 빠지게 된다.
    // resolve가 실행되면 끝이 난다.
    // reject가 실행되면 에러가 난 것이다.
    const result1 = await new Promise((resolve, reject) => {
      // Promise는 resolve가 실행될때까지 기다린다.
      // Promise는 API 요청 등 시간이 걸리는 작업에 쓰는 것이다.
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    console.log(result1);
    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("Promise 요청");
  };

  const onClickPromiseAll = async () => {
    /* 1. 하나하나씩 확인하는 방법 */
    // console.time("PromiseAll 요청");
    // const result = await Promise.all([
    //   // 3개가 모두 끝날때까지 기다린다. 하나씩이 아니라 한번에 요청이 간다.
    //   // Promise들의 배열이 들어간다. 동시에 실행시킬 Promise를 배열 형태로 넣어주면 된다.
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 3000);
    //   }),
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 3000);
    //   }),
    // ]);
    // console.log(result);
    // console.timeEnd("PromiseAll 요청");

    /* 2. 한방에 확인하는 방법 */
    console.time("PromiseAll 요청");
    const result = await Promise.all(
      // 3개가 모두 끝날때까지 기다린다. 하나씩이 아니라 한번에 요청이 간다.
      // Promise들의 배열이 들어간다. 동시에 실행시킬 Promise를 배열 형태로 넣어주면 된다.
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(result);
    console.timeEnd("PromiseAll 요청");
  };
  return (
    <>
      <button onClick={onClickPromise}>Promise 연습하기</button>
      <button onClick={onClickPromiseAll}>Promise.all 연습하기</button>
    </>
  );
}
