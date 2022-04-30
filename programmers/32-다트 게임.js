function solution(dartResult) {
  dartResult = dartResult.split("");

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "*" && i >= 3) {
      dartResult.splice(i - 2, 0, "*");
      i++;
    }
  }

  dartResult = dartResult.map((el, i) => {
    if (dartResult[i] + dartResult[i + 1] === "10") return "+10";
    if (dartResult[i - 1] + dartResult[i] === "10") return;

    if (el === "0") return "+0";
    else if (Number(el)) {
      return "+" + el;
    } else if (el === "#") {
      return "*(-1)";
    } else if (el === "S") {
      return "**1";
    } else if (el === "D") {
      return "**2";
    } else if (el === "T") {
      return "**3";
    } else if (el === "*") {
      return "*2";
    }
    return el;
  });
  let str = dartResult.join("");
  str = str.split("+");
  str = str.map((el) => eval(el));

  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i]) result += str[i];
  }
  return result;
}

const isBonus = ["S", "D", "T"]; // 보너스를 구분하기 위한 배열

function solution(dartResult) {
  const answer = [];

  let score = "";
  for (let i = 0; i < dartResult.length; i++) {
    if (isNaN(dartResult[i]) === false) {
      // 숫자 타입으로 변환했을 때 데이터의 결과가 NaN 값이 아닌 경우(숫자가 맞는 경우)
      score += dartResult[i];
    } else {
      // 숫자 타입으로 변환했을 때 데이터의 결과가 NaN 값인 경우(숫자가 아닌 경우)
      if (isBonus.includes(dartResult[i])) {
        score = Number(score);

        if (dartResult[i] === "D") {
          score = score ** 2; // 더블일 경우에는 2제곱
        } else if (dartResult[i] === "T") {
          score = score ** 3; // 트리플일 경우에는 3제곱
        }
        console.log(dartResult[i], score);
        answer.push(score);
        score = "";
      } else {
        // 옵션 처리 "*", "#"
        console.log(dartResult[i], answer);
        if (dartResult[i] === "#") {
          // 아차상일 경우: 해당 점수를 마이너스 한다.
          answer[answer.length - 1] *= -1;
        } else if (dartResult[i] === "*") {
          answer[answer.length - 1] *= 2;

          // 현재 게임이 두번째 게임 이상일 경우
          if (answer.length > 1) {
            answer[answer.length - 2] *= 2;
          }
          // answer[answer.length-2] *= 2dded
        }
      }
    }
  }
  return answer.reduce((acc, cur) => acc + cur);
}

const isBonus = ["S", "D", "T"]; // 보너스를 구분하기 위한 배열

function solution(dartResult) {
  let score = ""; // 문자열에 있는 점수 데이터를 저장
  let currentScore = 0; // 현재 게임(턴)의 점수를 저장
  let stop = false; // 점수를 최종 저장할 시점을 찾음

  return dartResult
    .split("")
    .reduce((acc, cur, i) => {
      if (isNaN(cur) === false) {
        score += cur;
        stop = false;
      } else if (isBonus.includes(cur)) {
        // 보너스 처리
        score = Number(score);
        const squared = isBonus.indexOf(cur) + 1;

        currentScore = score ** squared;
        score = "";

        // 다음 데이터가 숫자인 경우 (옵션이 아닌 경우, 현재 게임(턴)이 종료된다.)
        if (
          isNaN(dartResult[i + 1]) === false ||
          i + 1 === dartResult.length // 마지막 데이터를 체크해서 게임을 무조건 종료한다.
        ) {
          stop = true;
        }
      } else {
        stop = true;
        if (cur === "#") {
          currentScore *= -1;
        } else {
          currentScore *= 2;
          if (acc.length > 0) {
            acc[acc.length - 1] *= 2;
          }
        }
      }
      if (stop) {
        acc.push(currentScore);
      }
      return acc;
    }, [])
    .reduce((acc, cur) => acc + cur);
}
