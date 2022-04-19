/* any 타입 */
// 어떤 데이터든 다 들어갈 수 있다. JS와 같다.
const getAny = (args: any) => {
  return args + 2;
};
const result = getAny("철수");
console.log(result);

/* unknown 타입 */
const getUnknown = (args: unknown) => {
  if (typeof args === "number") {
    return args + 2;
  } else {
    return "숫자를 넣어주세요.";
  }
};
const result2 = getUnknown("철수");
console.log(result2);

// 둘 다 아무거나 들어갈 수 있지만
// 상황별로 어떤게 들어왔을 때 어떤 행위를 해줘라는 구체적인 명시를 해줘야 한다.
// any보다는 unknown을 사용하자.
// any를 쓰면 JS만 쓸 때와 마찬가지로 어떤게 들어가는지, 어떤 결과가 나오는지 알 수 없다.
// TS를 활용하면 결과에 대한 예측이 가능하다.
// 개발자에게 안전하게 코딩하도록 유도할 수 있다.
