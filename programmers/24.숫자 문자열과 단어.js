function solution(s) {
  [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ].forEach((el, i) => {
    if (s.includes(el)) s = s.replace(el, i);
  });
  return Number(s);
}

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  for (let i = 0; i < numbers.length; i++) {
    const regExp = new RegExp(numbers[i], "g");
    s = s.replace(regExp, i);
  }
  return Number(s);
}
