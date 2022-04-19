function solution(n, lost, reserve) {
  reserve = reserve.sort((a, b) => a - b);
  lost = lost.sort((a, b) => a - b);
  const newReserve = [...reserve];
  newReserve.map((el) => {
    if (lost.includes(el)) {
      lost.splice(
        lost.findIndex((e) => e === el),
        1
      );
      reserve.splice(
        reserve.findIndex((e) => e === el),
        1
      );
    }
  });
  const newReserve2 = [...reserve];
  newReserve2.map((el) => {
    if (lost.includes(el - 1)) {
      lost.splice(
        lost.findIndex((e) => e === el - 1),
        1
      );
      reserve.splice(
        reserve.findIndex((e) => e === el - 1),
        1
      );
    } else if (lost.includes(el + 1)) {
      lost.splice(
        lost.findIndex((e) => e === el + 1),
        1
      );
      reserve.splice(
        reserve.findIndex((e) => e === el + 1),
        1
      );
    }
  });
  return n - lost.length;
}

function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);

  let answer = n - lost.length;
  for (let i = 0; i < lost.length; i++) {
    // 내 앞 번호의 학생이 여벌 체육복을 가지고 있는지를 검사
    if (reserve.includes(lost[i] - 1)) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      answer++;
      // 내 뒤 번호의 학생이 여벌 체육복을 가지고 있는지를 검사
    } else if (reserve.includes(lost[i] + 1)) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      answer++;
    }
  }
  return answer;
}

function solution(n, lost, reserve) {
  const losted = [...lost];
  lost = lost
    .filter((student) => !reserve.includes(student))
    .sort((a, b) => a - b);
  reserve = reserve
    .filter((student) => !losted.includes(student))
    .sort((a, b) => a - b);

  let answer = n - lost.length;

  return lost.reduce((acc, cur) => {
    // 앞에 있는 학생이 여벌 체육복을 가지고 있는지
    const prev = reserve.indexOf(cur - 1);
    // 뒤에 있는 학생이 여벌 체육복을 가지고 있는지
    const next = reserve.indexOf(cur + 1);

    if (prev !== -1) {
      // 앞에 있는 학생이 여벌 체육복을 가지고 있는 경우
      reserve.splice(prev, 1);
      acc++;
    } else if (next !== -1) {
      // 뒤에 있는 학생이 여벌 체육복을 가지고 있는 경우
      reserve.splice(next, 1);
      acc++;
    }
    return acc;
  }, answer);
}
