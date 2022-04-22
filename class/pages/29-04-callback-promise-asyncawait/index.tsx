// import axios from "axios";
// import { resolve } from "node:path/win32";

// export default function CallbackPromiseAsyncawaitPage() {
//   const onClickCallback = () => {
//     const aaa = new XMLHttpRequest();
//     aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
//     aaa.send();
//     // load되면 이 함수를 실행시켜줘
//     aaa.addEventListener("load", (res) => {
//       // res: response
//       const num = res.target.response.split("")[0];

//       const bbb = new XMLHttpRequest();
//       bbb.open("get", `http://koreanjson.com/posts/${num}`);
//       bbb.send();
//       bbb.addEventListener("load", (res) => {
//         const userId = res.target.response.UserId;
//         const ccc = new XMLHttpRequest();
//         ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
//         ccc.send();
//         ccc.addEventListener("load", (res) => {
//           console.log(res); // 최종 결과값!
//         });
//       });
//       console.log(num);
//     });
//   };

//   /* Promise */
//   // 시간이 걸리는 작업을 할 때 쓴다. 외부 API 요청 등
//   // new Promise().then(); // 이 결과가 끝나서 성공했을 때 받는 것
//   // new Promise().catch(); // 이 결과가 끝나서 실패했을 때 받는 것

//   // new Promise((resorve, reject) => {
//   //   // 외부 요청 코드

//   //   // 성공
//   //   resolve("철수");
//   //   // 실패
//   //   reject("에러 발생!");

//   // }).then((res) => console.log(res)).catch(err=>{});

//   // axios 라이브러리에서 Promise를 리턴한다.

//   // Promise는 callback함수와 다르게, 계속 이어서 요청할 수 있다.
//   const onClickPromise = () => {
//     console.log("여기는 1번입니다.");
//     axios
//       .get("http://numbersapi.com/random?min=1&max=200")
//       .then((res) => {
//         console.log("여기는 2번입니다.");

//         return axios.get(`http://koreanjson.com/posts/${res}`);
//       })
//       .then((res) => {
//         console.log("여기는 3번입니다.");

//         return axios.get(`http://koreanjson.com/posts/${res}`);
//       })
//       .then((res) => {
//         console.log("여기는 4번입니다.");

//         return axios.get(`http://koreanjson.com/posts/${res}`);
//       });
//     console.log("여기는 5번입니다.");
//   };

//   // axios
//   // .get("http://numbersapi.com/random?min=1&max=200")
//   // .then((res) => {
//   //     const num = res.data.split(" ")[0]; // 71(랜덤숫자)
//   //     return axios.get(`http://koreanjson.com/posts/${num}`);
//   // })
//   // .then((res) => {
//   //     const userId = res.data.UserId;
//   //     return axios.get(`http://koreanjson.com/posts?userId=${userId}`)
//   // })
//   // .then((res) => {
//   //     console.log(res);
//   // });

//   // 리턴이 Promise여야 await를 붙일 수 있다. 최근에 나오는 라이브러리들은 거의 다 Promise를 지원한다.
//   const onClickAsyncawait = async () => {
//     const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
//     const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");
//     const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
//   };
//   return (
//     <>
//       <button onClick={onClickCallback}>Callback 요청하기</button>
//       <button onClick={onClickPromise}>Promise 요청하기</button>
//       <button onClick={onClickAsyncawait}>Asyncawait 요청하기</button>
//     </>
//   );
// }
