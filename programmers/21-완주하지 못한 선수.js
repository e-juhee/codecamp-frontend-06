function solution(par, com) {
  const parSort = par.sort();
  const comSort = com.sort();
  return parSort.filter((el, i) => el !== comSort[i])[0];
}

// 효율성 탈락 ㅜ
function solution(par, com) {
  return par.sort().filter((el, i) => el !== com.sort()[i])[0];
}

// splice 활용, 효율성 탈락
function solution(par, com) {
  for (let i = 0; i < com.length; i++) {
    if (par.includes(com[i])) {
      par.splice(par.indexOf(com[i]), 1);
    }
  }
  return par[0];
}

// 객체 활용, for-in 활용
function solution(par, com) {
  const answer = {};
  for (let i = 0; i < par.length; i++) {
    answer[par[i]] === undefined ? (answer[par[i]] = 1) : answer[par[i]]++;
  }

  for (let i = 0; i < com.length; i++) {
    if (answer[com[i]]) {
      answer[com[i]]--;
    }
  }
  for (let key in answer) {
    if (answer[key] !== 0) {
      return key;
    }
  }
}
