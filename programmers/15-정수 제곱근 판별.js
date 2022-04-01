function solution(n) {
  let x = Math.sqrt(n);
  return x === Math.trunc(x) ? (x + 1) * (x + 1) : -1;
}

// for & if
function solution(n) {
  let answer = -1;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      answer = i + 1;
      return answer * answer;
    }
  }
  return answer;
}

// while
/* 거듭 제곱 연산자 */
// 2 ** 6 // 왼쪽의 숫자를 오른쪽의 숫자만큼 제곱한다.
// Math.pow(2,3)
function solution(n) {
  let answer = 1; // 최초식
  while (answer ** 2 < n) {
    // 조건식
    answer++; // 증감식
  }
  return answer ** 2 === n ? (answer + 1) ** 2 : -1;
}

// Math.sqrt(num)
// 정수 판별
// Number.isInteger(1.1)
function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) return (sqrt + 1) ** 2;
  return -1;
}

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
