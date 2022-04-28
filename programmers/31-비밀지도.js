function solution(n, arr1, arr2) {
  arr1 = arr1.map((el) => el.toString(2).padStart(n, 0).split("")).flat();
  arr2 = arr2.map((el) => el.toString(2).padStart(n, 0).split("")).flat();

  const result = [];
  arr1.map((el, i) => {
    result.push(arr1[i] === "0" && arr2[i] === "0" ? " " : "#");
  });
  const result3 = [];
  while (result.length !== 0) {
    let result2 = [];
    for (let i = 0; i < n; i++) {
      let temp = result.shift();
      result2.push(temp);
    }
    result3.push(result2.join(""));
  }
  return result3;
}

function solution(n, arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let str = "";
    const map1 = arr1[i].toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");
    for (let l = 0; l < map1.length; l++) {
      if (map1[l] === "1" || map2[l] === "1") {
        str += "#";
      } else {
        str += " ";
      }
    }
    answer.push(str);
  }
  return answer;
}

function solution(n, arr1, arr2) {
  return arr1.map((map1, i) => {
    map1 = map1.toString(2).padStart(n, "0");
    const map2 = arr2[i].toString(2).padStart(n, "0");
    return map1.split("").reduce((acc, cur, i) => {
      return acc + (cur === "1" || map2[i] === "1" ? "#" : " ");
    }, "");
  });
}
