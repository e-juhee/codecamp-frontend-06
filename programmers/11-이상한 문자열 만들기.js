function solution(s) {
  let answer = [];
  let splitList = s.split(" ");
  let blankList = [];
  for (let i = 0; i < splitList.length; i++) {
    blankList.push(splitList[i]);
    for (let j = 0; j < blankList[i].length; j++) {
      if (j % 2 === 0) {
        answer.push(blankList[i][j].toUpperCase());
      } else {
        answer.push(blankList[i][j].toLowerCase());
      }
    }
    if (answer.length !== s.length) answer.push(" ");
  }
  return answer.join("");
}

function solution2(s) {
  let answer = "";
  let idx = 0; //단어별로 인덱스를 구분하기 위한 변수
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      //공백을 만났을 경우
      answer += s[i];
      idx = 0;
    } else {
      answer += idx % 2 === 1 ? s[i].toLowerCase() : s[i].toUpperCase();
      idx++;
    }
    console.log(answer, idx);
  }
  return answer;
}

//map 사용
function solution(s) {
  const answer = s
    .split(" ")
    .map((str) => {
      return str
        .split("")
        .map((letter, i) => {
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  console.log(answer);
  return answer;
}
