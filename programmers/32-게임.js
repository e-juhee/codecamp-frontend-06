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
