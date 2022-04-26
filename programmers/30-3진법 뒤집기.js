function solution(n) {
  n = n.toString(3).split("").reverse().join("");
  return parseInt(n, 3);
}

function solution(n) {
  return n
    .toString(3)
    .split("")
    .reduce((acc, cur, i) => acc + cur * 3 ** i, 0);
}

function solution(n) {
  const result = [];
  while (n !== 0) {
    result.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return result.reduce((acc, cur, i) => acc + cur * 3 ** i, 0);
}

function solution(n) {
  n = n.toString(3);
  let answer = "";
  for (let i = n.length - 1; i >= 0; i--) {
    answer += n[i];
  }
  return parseInt(answer, 3);
}
