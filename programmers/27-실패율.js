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

function solution(N, stages) {
  // 모든 스테이지의 번호를 오름차순으로 정렬
  stages.sort((a, b) => a - b);
  const infos = []; // 각각의 스테이지의 정보를 저장
  for (let i = 1; i <= N; i++) {
    infos.push({
      stage: i, // 현재 스테이지의 번호
      users: 0, // 해당 스테이지를 클리어하지 못한 유저 수
      fail: 0, // 스테이지의 실패율
    });
  }
  let allUsers = stages.length; // 모든 유저의 수(초기값)
  for (let i = 0; i < stages.length; i++) {
    if (infos[stages[i] - 1]) {
      infos[stages[i] - 1].users++;
      // 현재 스테이지의 번호와 다음 스테이지의 번호가 동일하지 않을 때
      // 현재 스테이지 유저의 합산이 완료되는 시점
      if (stages[i] !== stages[i + 1]) {
        const fail = infos[stages[i] - 1].users / allUsers;
        allUsers -= infos[stages[i] - 1].users;
        infos[stages[i] - 1].fail = fail;
      }
    }
  }
  return infos
    .sort((a, b) => {
      return b.fail - a.fail;
    })
    .map((el) => {
      return el.stage;
    });
}

/* indexOf, lastIndexOf */
function solution(N, stages) {
  // 모든 스테이지의 번호를 오름차순으로 정렬
  stages.sort((a, b) => a - b);

  let allUsers = stages.length;
  return new Array(N)
    .fill(1)
    .map((num, i) => {
      const stage = num + i;
      const arr = stages.slice(
        // 클리어하지 못한 유저의 수
        stages.indexOf(stage),
        stages.lastIndexOf(stage) + 1
      );
      const fail = arr.length / allUsers;
      allUsers -= arr.length;
      return { stage, fail };
    })
    .sort((a, b) => b.fail - a.fail)
    .map((el) => el.stage);
}
