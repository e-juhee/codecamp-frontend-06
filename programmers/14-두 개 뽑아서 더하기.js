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
