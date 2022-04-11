function solution(par, com) {
  const parSort = par.sort();
  const comSort = com.sort();
  return parSort.filter((el, i) => el !== comSort[i])[0];
}

// 효율성 탈락 ㅜ
function solution(par, com) {
  return par.sort().filter((el, i) => el !== com.sort()[i])[0];
}
