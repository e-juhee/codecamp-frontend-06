function solution(a, b) {
  let num = a <= b ? a : b;
  let answer = 0;
  const arr = new Array(Math.abs(b - a) + 1).fill(num);
  for (let i = 0; i < arr.length; i++) {
    answer = num + i + answer;
  }
  return answer;
}

// Math.min(a,b) & Math.max(a,b) 사용

function solution(a, b) {
  let answer = 0;

  if (a === b) {
    return b;
  } else {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    for (let i = min; i <= max; i++) {
      answer += i;
    }
  }
  return answer;
}

// reduce 사용
function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const answer = new Array(max - min + 1).fill(1).reduce((acc, cur, i) => {
    const num = min + i;
    return acc + num;
  }, 0);
  return answer;
}
