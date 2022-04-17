// const ARR = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];
// function solution(s) {
//   ARR.forEach((el, i) => {
//     if (s.includes(el)) s = s.replace(el, i);
//   });
//   return Number(s);
// }

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
