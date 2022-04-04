function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((el, index) => {
    signs[index] ? (answer += el) : (answer -= el);
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
