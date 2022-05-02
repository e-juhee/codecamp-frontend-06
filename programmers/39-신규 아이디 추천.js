function solution(new_id) {
  const CHAR_CODE = [
    45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 95, 97, 98, 99, 100, 101,
    102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
    117, 118, 119, 120, 121, 122,
  ];

  let result = new_id.toLowerCase().split("");
  result = result.map((el) => {
    if (CHAR_CODE.includes(el.charCodeAt(0))) return el;
    return "";
  });
  result = result.join("").split("");
  result = result.map((el, i) => {
    if (el === "." && result[i + 1] === ".") return "";
    return el;
  });

  result = result.join("").split("");
  if (result[0] === ".") result = result.slice(1);

  if (result.length === 0) result.push("a");
  if (result.length > 15) result = result.slice(0, 15);
  if (result[result.length - 1] === ".")
    result = result.slice(0, result.length - 1);

  while (result.length <= 2) {
    result.push(result[result.length - 1]);
  }

  return result.join("");
}
solution("z-+.^.");
// 	"z--"

/* 문자열로 풀이 */

const filter = "qwertyuiopasdfghjklzxcvbnm.-_1234567890";

function solution(new_id) {
  // 1단계 : 모든 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계: 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
  let answer = "";
  for (let i = 0; i < new_id.length; i++) {
    if (filter.includes(new_id[i])) answer += new_id[i];
  }

  // 3단계: 마침표가 2번 이상 연속된다면, 하나의 마침표로 치환
  while (answer.includes("..")) {
    answer = answer.replace("..", ".");
  }

  // 4단계: 마침표가 처음이나 끝에 위치한다면 제거
  if (answer[0] === ".") {
    answer = answer.substring(1);
  }
  function removeLastDot() {
    if (answer[answer.length - 1] === ".") {
      answer = answer.substring(0, answer.length - 1);
    }
  }
  removeLastDot();

  // 5단계: 빈 문자열이라면 "a"를 대입
  if (answer === "") answer = "a";

  // 6단계: 길이가 16자 이상이라면, 15글자까지 자르고
  // 마침표가 문자열 끝에 위치하면 제거한다.
  if (answer.length >= 16) {
    console.log(answer);
    answer = answer.substring(0, 15);
    if (answer[answer.length - 1] === ".") {
      removeLastDot();
    }
  }

  // 7단계: 문자열의 길이가 2자 이하라면, 마지막 글자로 3글자까지 채운다.
  if (answer.length <= 2) {
    answer = answer.padEnd(3, answer[answer.length - 1]);
  }
  console.log(answer);
  return answer;
}

/* 배열로 풀이 */
const filterStr = "qwertyuiopasdfghjklzxcvbnm.-_1234567890";

function solution(new_id) {
  // 1단계 : 모든 대문자를 소문자로 치환
  new_id = new_id.toLowerCase();

  // 2단계: 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 모든 문자 제거
  let answer = new_id.split("").filter((str) => filterStr.includes(str));

  // 3단계: 마침표가 2번 이상 연속된다면, 하나의 마침표로 치환
  answer = answer.filter(
    (str, i) => str !== "." || (str === "." && answer[i + 1] !== ".")
  );

  // 4단계: 마침표가 처음이나 끝에 위치한다면 제거
  if (answer[0] === ".") {
    // answer.shift()
    answer = answer.slice(1);
  }
  const removeLastDot = () => {
    if (answer[answer.length - 1] === ".") {
      // answer.pop()
      answer = answer.slice(0, answer.length - 1);
    }
  };

  removeLastDot();
  // 5단계: 빈 문자열이라면 "a"를 대입
  if (answer.length === 0) answer.push("a");

  // 6단계: 길이가 16자 이상이라면, 15글자까지 자르고
  // 마침표가 문자열 끝에 위치하면 제거한다.
  if (answer.length >= 16) {
    answer = answer.slice(0, 15);
    removeLastDot();
  }

  // 7단계: 문자열의 길이가 2자 이하라면, 마지막 글자로 3글자까지 채운다.
  if (answer.length <= 2) {
    const add = new Array(3 - answer.length).fill(answer[answer.length - 1]);
    // answer = answer.concat(add)
    answer = [...answer, ...add];
  }
  return answer.join("");
}
