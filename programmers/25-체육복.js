// 5, 12 실패
function solution(n, lost, reserve) {
  const initialReserve = reserve.length;
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);
  for (let i = 0; i < lost.length; i++) {
    if (reserve.includes(lost[i])) {
      reserve = reserve.filter((el) => el !== lost[i]);
    } else if (reserve.includes(lost[i] - 1)) {
      reserve = reserve.filter((el) => el !== lost[i] - 1);
    } else if (reserve.includes(lost[i] + 1)) {
      reserve = reserve.filter((el) => el !== lost[i] + 1);
    }
  }
  console.log(reserve);
  return n - lost.length + initialReserve - reserve.length;
}

solution(5, [1, 2, 4], [2, 3, 4, 5]);

function solution(n, lost, reserve) {
  const initialReserve = reserve.length;
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      reserve = reserve.filter((el) => el !== reserve[i]);
    } else if (lost.includes(reserve[i] - 1)) {
      console.log("여기");
      reserve = reserve.filter((el) => el !== reserve[i]);
      console.log(reserve);
    } else if (lost.includes(reserve[i] + 1)) {
      reserve = reserve.filter((el) => el !== reserve[i]);
    }
  }

  return n - lost.length + initialReserve - reserve.length;
}

// solution(5, [1, 2, 4], [2, 3, 4, 5]);
// solution(	5, [2, 4], [1, 3, 5]); // 5
solution(5, [2, 4], [3]); // 4

function solution(n, lost, reserve) {
  const initialReserve = reserve.length;
  const initialLost = lost.length;

  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  for (let i = 0; i < reserve.length; i++) {
    lost.map((el) => {
      if (el === reserve[i]) {
        lost = lost.filter((el) => el !== reserve[i]);
        reserve = reserve.filter((el) => el !== reserve[i]);
      }
    });
  }

  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      lost = lost.filter((el) => el !== reserve[i]);
      reserve = reserve.filter((el) => el !== reserve[i]);
    } else if (lost.includes(reserve[i] - 1)) {
      lost = lost.filter((el) => el !== reserve[i]);
      reserve = reserve.filter((el) => el !== reserve[i]);
    } else if (lost.includes(reserve[i] + 1)) {
      lost = lost.filter((el) => el !== reserve[i]);
      reserve = reserve.filter((el) => el !== reserve[i]);
    }
  }

  return n - lost.length;
}
