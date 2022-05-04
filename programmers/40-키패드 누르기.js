const leftNumbers = [1, 4, 7];
const rightNumbers = [3, 6, 9];

function solution(numbers, hand) {
  let answer = "";

  // 현재 손가락의 위치
  const current = {
    left: 10, // *
    right: 12, // #
  };

  for (let i = 0; i < numbers.length; i++) {
    if (leftNumbers.includes(numbers[i])) {
      // 누를 번호가 왼쪽 키패드에 해당되는 경우 (= 왼쪽 엄지손가락으로 누른다.)
      answer += "L";
      current["left"] = numbers[i];
    } else if (rightNumbers.includes(numbers[i])) {
      answer += "R";
      current["right"] = numbers[i];
    } else {
      // 가운데 키패드를 누를 때
      const locationObj = { ...current }; // 현재 손가락들의 위치
      for (let hand in locationObj) {
        numbers[i] = numbers[i] === 0 ? 11 : numbers[i];
        let location = Math.abs(numbers[i] - locationObj[hand]);
        // 상하로 이동하기 위한 거리를 구한다. (왼쪽으로 3칸 = 위로 1칸)
        if (location >= 3) {
          location = Math.trunc(location / 3) + (location % 3);
        }
        locationObj[hand] = location;
      }
      if (locationObj["left"] === locationObj["right"]) {
        answer += hand === "right" ? "R" : "L";
        current[hand] = numbers[i];
      } else {
        if (locationObj["left"] > locationObj["right"]) {
          // 오른쪽 손가락이 더 가가운 경우
          answer += "R";
          current["right"] = numbers[i];
        } else {
          answer += "L";
          current["left"] = numbers[i];
        }
      }
    }
  }

  return answer;
}

// const leftNumbers = [1, 4, 7] // 왼쪽 키패드에 해당하는 숫자를 배치
// const rightNumbers = [3, 6, 9] // 오른쪽 키패드에 해당하는 숫자를 배치
const [leftNumbers, rightNumbers] = [
  [1, 4, 7],
  [3, 6, 9],
];

function solution(numbers, hand) {
  // 현재 두 엄지손가락이 어떤 위치에 있는지
  const current = {
    left: 10,
    right: 12,
  };

  return numbers.reduce((acc, cur) => {
    // useFinger : 어떤 손가락으로 눌렀는지에 대한 최종 리턴값 ("L", "R");
    // target : 왼손인지 오른손인지 ("left", "right")
    // number : 최종적으로 누른 번호 키패드 (숫자 : 1 ~ 11)
    let [useFinger, target, number] = ["", "", 0];

    if (leftNumbers.includes(cur)) {
      [useFinger, target, number] = ["L", "left", cur];
    } else if (rightNumbers.includes(cur)) {
      [useFinger, target, number] = ["R", "right", cur];
    } else {
      const locationObj = Object.entries(current).reduce((acc2, cur2) => {
        // const targetHand = cur2[0];
        cur = cur === 0 ? 11 : cur;
        let location = Math.abs(cur - cur2[1]);

        if (location > 2) {
          // location >= 3
          location = Math.trunc(location / 3) + (location % 3);
        }
        acc2[cur2[0]] = location;
        return acc2;
      }, {});

      if (locationObj["left"] === locationObj["right"]) {
        [useFinger, target, number] = [
          hand === "left" ? "L" : "R",
          hand === "left" ? hand : "right",
          cur,
        ];
      } else if (locationObj["left"] > locationObj["right"]) {
        [useFinger, target, number] = ["R", "right", cur];
      } else {
        [useFinger, target, number] = ["L", "left", cur];
      }
    }

    current[target] = number;
    return acc + useFinger;
  }, "");
}
