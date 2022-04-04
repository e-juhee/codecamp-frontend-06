function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
  return x % sum === 0;
}

// 초기값을 0으로 넣어주면 숫자로 시작하기 때문에 acc는 숫자로 변환해주지 않아도 된다.
