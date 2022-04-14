function solution(n) {
  const arr = [0, 1];
  for (let i = 0; i < n - 1; i++) {
    arr[i + 2] = (arr[i + 1] % 1234567) + (arr[i] % 1234567);
  }
  return arr[n];
}
// reduce
function solution(n) {
  let [p0, p1] = [0, 1];
  return new Array(n - 1).fill(1).reduce((acc) => {
    p1 = (acc + p0) % 1234567; // p1을 지금까지의 합에 직전 값을 더한 값으로 바꾼다.
    p0 = acc; // p0을 이전 결과로 바꾼다.
    return p1;
  }, 1);
}

// number === Int
// 허용하는 범위가 정해져있다.
// JS에서는 2의 53제곱에 1을 뺀 값까지만 출력이 가능하다.

// 어느 범위까지가 정상적인지 알려주는 메서드
2 ** 53 - 1;
Number.MAX_SAFE_INTEGER;
Number.isSafeInteger(2 ** 53 - 1);
Number.isSafeInteger(2 ** 53);

function solution(n) {
  let zero = 0; // 0번째 피보나치 수의 결과
  let first = 1; // 1번째 피보나치 수의 결과
  let sum = zero + first; // 2번째 피보나치 수의 결과
  const answer = new Array(n - 1).fill(1).reduce((acc) => {
    console.log(acc, sum, zero, first);
    sum = (zero + acc) % 1234567;
    zero = acc;
    first = sum;
    return sum;
  }, sum);
  return answer;
}
