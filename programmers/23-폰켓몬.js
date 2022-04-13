function solution(nums) {
  return new Set(nums).size > nums.length / 2
    ? nums.length / 2
    : new Set(nums).size;
}

function solution(nums) {
  const answer = [];
  for (let i = 0; i < nums.length; i++) {
    console.log(answer, nums[i]);
    if (answer.length < nums.length / 2 && answer.includes(nums[i]) === false) {
      answer.push(nums[i]);
    }
  }
  return answer.length;
}

function solution(nums) {
  const answer = new Set([]);
  for (let i = 0; i < nums.length; i++) {
    if (answer.size < nums.length / 2) {
      answer.add(nums[i]);
    }
  }
  return answer.size;
}

function solution(nums) {
  const answer = new Set([]);
  nums.forEach((monster) => {
    if (answer.size < nums.length / 2) {
      answer.add(monster);
    }
  });
  return answer.size;
}
