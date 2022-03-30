function solution(num) {
  let count = 0;
  while (num !== 1) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }
  return count < 500 ? count : (count = -1);
}
