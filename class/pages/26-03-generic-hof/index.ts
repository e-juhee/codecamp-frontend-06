/* 1. HOF - 일반 타입 */
function firstFunc1(arg1: string) {
  return function secondFunc1(arg2: number): [string, number] {
    // return되는 부분이 이부분이니까 secondFunc1에 return의 타입을 적는다.
    return [arg1, arg2];
  };
}
const result1 = firstFunc1("영희")(8);
console.log(result1);

/* 2. HOF - any 타입 */
function firstFunc2(arg1: any) {
  return function secondFunc2(arg2: any): [any, any] {
    return [arg1, arg2];
  };
}
const result22 = firstFunc2("영희")(8);
console.log(result22);

/* 3. HOF - generic 타입 */
function firstFunc3<T>(arg1: T) {
  return function secondFunc3<U>(arg2: U): [T, U] {
    return [arg1, arg2];
  };
}
const result3 = firstFunc3("영희")(8);
const result31 = firstFunc3(8)("영희");
console.log(result3);
console.log(result31);

/* 4. HOF - generic 타입 - 화살표 함수 */
// prettier-ignore
const firstFunc4 = <T>(arg1: T) => <U>(arg2: U): [T, U] => {
      return [arg1, arg2];
    };
const result4 = firstFunc4("영희")(8);
console.log(result4);

/* 5. HOF - generic 타입 - 컴포넌트에 응용해보기(HOC) */
// prettier-ignore
const withAuth = <C>(component: C) => <P>(props: P): [C, P] => { // component는 변수명일 뿐이다.
      return [component, props];
    };
const result5 = withAuth("Bbb")({ aaa: "철수" });
console.log(result5);
