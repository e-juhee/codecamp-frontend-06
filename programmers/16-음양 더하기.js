function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((el, index) => {
    signs[index] ? (answer += el) : (answer -= el);
  });
  return answer;
}
