function solution(a, b) {
  return a.map((el, index) => el * b[index]).reduce((acc, cur) => acc + cur);
}

function solution(a, b) {
  const answer = a.reduce((acc, cur, i) => {
    return acc + cur * b[i];
  }, 0);
  return answer;
}
