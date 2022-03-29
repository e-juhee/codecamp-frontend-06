function solution(n) {
  let arr = String(n).split("").reverse();
  let answer = [];
  arr.map((el) => answer.push(Number(el)));
  return answer;
}

function solution2(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((str) => {
      return Number(str);
    });
}
