function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        if (!answer.includes(numbers[i] + numbers[j])) {
          answer.push(numbers[i] + numbers[j]);
        }
      }
    }
  }
  return answer.sort((a, b) => a - b);
}

// 이중 for문
function solution(numbers) {
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      if (answer.includes(sum) === false) answer.push(sum);
    }
  }
  return answer.sort((a, b) => a - b);
}

// Set
function solution(numbers) {
  const answer = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      answer.add(sum);
    }
  }
  return [...answer].sort((a, b) => a - b);
}

// forEach & Set
function solution(numbers) {
  const answer = new Set();
  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach((num2) => {
      const sum = num1 + num2;
      answer.add(sum);
    });
  });
  return [...answer].sort((a, b) => a - b);
}
