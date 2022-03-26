function solution(array, commands) {
  var answer = [];
  for (let n = 0; n < commands.length; n++) {
    let i = commands[n][0] - 1;
    let j = commands[n][1];
    let k = commands[n][2] - 1;
    answer[n] = array.slice(i, j).sort((a, b) => a - b)[k];
  }
  return answer;
}

//맵 사용
function solution2(array, commands) {
  const answer = commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]).sort((a, b) => a - b);
    console.log(result, el[2]);
    return result[el[2] - 1];
  });
  return answer;
}
