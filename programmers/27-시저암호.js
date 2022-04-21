// charCodeAt, fromCharCode
function solution(s, n) {
  return s
    .split("")
    .map((el) => {
      const char = el.charCodeAt();
      return char === 32
        ? " "
        : char + n > 122
        ? String.fromCharCode(char + n - 26)
        : char >= 97
        ? String.fromCharCode(char + n)
        : char + n > 90
        ? String.fromCharCode(char + n - 26)
        : String.fromCharCode(char + n);
    })
    .join("");
}

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue; // 아래 실행 안하고 다음 for 실행
    }
    let idx = s[i].charCodeAt() + n;
    if (idx > 122 || (idx > 90 && idx - n < 97)) {
      idx -= 26;
    }
    console.log(s[i], idx, String.fromCharCode(idx));
  }
}

// indexOf, subString, if(ㅇㅇ === undefined)
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i]; // " "
    } else {
      console.log(s[i]);
      let idx = alphabet.indexOf(s[i]);
      const word =
        idx > 25
          ? alphabet.substring(26) // 대문자에 해당하는 문자열을 잘라온다.
          : alphabet.substring(0, 26);

      idx = word.indexOf(s[i]) + n;

      if (word[idx] === undefined) {
        idx -= 26;
      }
      answer += word[idx];
    }
  }
  return answer;
}

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
    } else {
      const word = lower.includes(s[i]) ? lower : upper;
      let idx = word.indexOf(s[i]) + n;
      if (word[idx] === undefined) idx -= 26;
      answer += word[idx];
    }
  }
  return answer;
}

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  // reduce를 사용하기 위해서 먼저 배열을 만든다.
  return s.split("").reduce((acc, cur) => {
    const word = lower.includes(cur) ? lower : upper;
    let idx = word.indexOf(cur) + n;
    if (idx >= 26) idx -= 26;
    return acc + (cur === " " ? " " : word[idx]);
  }, "");
}

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue; // 아래 실행 안하고 다음 for 실행
    }
    let idx = s[i].charCodeAt() + n;
    if (idx > 122 || (idx > 90 && idx - n < 97)) {
      // 소문자 z(122)를 넘어가거나
      // 대문자 Z(90)을 넘어가면서 소문자를 넘어가지 않을 떼
      idx -= 26;
    }
    answer += String.fromCharCode(idx);
  }
  return answer;
}
