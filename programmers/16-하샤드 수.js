function solution(x) {
  const sum = x
    .toString()
    .split("")
    .reduce((acc, cur) => Number(acc) + Number(cur));
  return x % sum === 0;
}
