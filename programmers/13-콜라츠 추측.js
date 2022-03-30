function solution(num) {
  let count = 0;
  while (num !== 1) {
    if (count >= 500) {
      // 무한 루프 조심!!
      return -1;
    }
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }
  return count;
}

// reduce 활용
function solution2(num) {
  let answer = 0;
  const result = new Array(500).fill(1).reduce((acc, _) => {
    // _ : 사용하지 않겠다는 의미
    if (acc !== 1) {
      answer++;
      console.log(acc, answer);
      return acc % 2 === 0
        ? acc / 2 // 짝수일 때
        : acc * 3 + 1; // 홀수일 때
    } else {
      return 1;
    }
  }, num);
  return result !== 1 ? -1 : answer;
}
