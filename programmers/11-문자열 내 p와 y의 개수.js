function solution(s) {
  console.log(s[0]);
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p++;
    }
    if (s[i] === "y" || s[i] === "Y") {
      y++;
    }
  }
  return p === y;
}

//소문자로 변경하고 if문 안의 or 조건 제거
function solution2(s) {
  s = s.toLowerCase();
  console.log(s[0]);
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      p++;
    }
    if (s[i] === "y") {
      y++;
    }
  }
  return p === y;
}

function solution(s) {
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "P") {
      p++;
    }
    if (s[i] == "Y") {
      y++;
    }
  }
  return p == y;
}

//배열 사용
function solution(s) {
  const check = {};
  s.toLowerCase()
    .split("")
    .forEach((str) => {
      console.log(str, check);
      check[str] === undefined ? (check[str] = 1) : check[str]++;
    });
}

//forEach 사용
function solution(s) {
  const check = {};
  s.toLowerCase()
    .split("") //배열로 변환
    .forEach((str) => {
      //배열 메서드인 forEach 사용
      console.log(str, check);
      check[str] === undefined //객체에 해당 키값이 없는지 검증
        ? (check[str] = 1) //없다면 초기값 1로 지정
        : check[str]++; // 있으면 기존 값에 1을 더한다.
    });
  return check.p === check.y;
}
