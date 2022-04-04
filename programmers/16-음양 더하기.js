function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((el, index) => {
    answer += signs[index] ? el : -el;
  });
  return answer;
}

// reduce 이용
function solution(absolutes, signs) {
  return absolutes.reduce(
    (arr, cur, index) => (signs[index] ? arr + cur : arr - cur),
    0
  );
}
ㄴ;
function solution(absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, i) => {
    return acc + (signs[i] ? cur : -cur);
  }, 0);
  return answer;
}
