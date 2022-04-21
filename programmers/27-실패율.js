function solution(N, stages) {
  return new Array(N)
    .fill(0)
    .map((_, i) => {
      let reach = 0;
      let fail = 0;
      stages.map((el) => {
        if (el >= i + 1) reach++;
        if (el === i + 1) fail++;
      });
      return [i + 1, fail / reach];
    })
    .sort((a, b) => b[1] - a[1])
    .map((el) => el[0]);
}
