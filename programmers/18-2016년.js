function solution(a, b) {
  const dayList = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const dateList = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthList = new Array(12).fill(1);
  let curDate = b;
  for (let i = 0; i < a - 1; i++) {
    curDate += dateList[i];
  }
  return dayList[curDate % 7];
}

// 객체 사용
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
function solution(a, b) {
  let answer = 0;

  for (let i = 1; i < a; i++) {
    answer += month[i];
  }
  answer += b - 1;
  return week[answer % 7];
}

// 리듀스 사용
const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
function solution(a, b) {
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return (
      acc +
      (mn !== a
        ? // a월 이전일 때
          month[mn]
        : // a월일 때
          b - 1)
    );
  }, 0);
  return week[answer % 7];
}

// 날짜 객체
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b) {
  const answer = new Date(2016, a - 1, b).getDay();
  return week[answer];
}
