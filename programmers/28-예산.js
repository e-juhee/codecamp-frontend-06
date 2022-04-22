function solution(d, budget) {
  let result = 1;
  d.sort((a, b) => a - b).reduce((acc, cur) => {
    if (acc + cur <= budget) result++;
    return acc + cur;
  });
  return result;
}

function solution(d, budget) {
  const answer = [];
  d.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) {
      answer.push(d[i]);
    }
  }
  return answer.length;
}

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let answer = 0;
  while (budget - d[answer] >= 0) {
    console.log(budget, d[answer], answer);
    budget -= d[answer];
    answer++;
  }
  return answer;
}

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .filter((money) => {
      budget -= money;
      return budget >= 0;
    }).length;
}
