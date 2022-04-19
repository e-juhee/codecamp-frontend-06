// import { useState } from "react";

// /* 1. 문자 타입 */
// const getString = (arg: string): string => {
//   return arg;
// };
// const result1 = getString("철수");

// /* 2. 숫자 타입 */
// const getNumber = (arg: number): number => {
//   return arg;
// };
// const result22 = getNumber(2);

// /* 3. any 타입 : 결과값의 타입을 알 수 없다. */
// const getAny2 = (arg: any): any => {
//   return arg;
// };
// const result3_1 = getAny2("철수");
// const result3_2 = getAny2(8);
// const result3_3 = getAny2(true);

// /* 4. any 타입 2 */
// const getAnys = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
//   return [arg3, arg2, arg1];
// };
// const result4 = getAnys("철수", "다람쥐초등학교", 8);

// // 이를 보완하기 위한 타입이 generic이다.

// /* 5. generic 타입: 들어온 타입을 그대로 사용 */
// function getGeneric<MyType>(arg: MyType): MyType {
//   // 어떤 타입인지는 모르지만, 들어온 타입을 그대로 사용한다.
//   return arg;
// }
// const aaa: string = "철수";
// const bbb: number = 8;
// const ccc: boolean = true;
// const result5_1 = getGeneric(aaa);
// const result5_2 = getGeneric(bbb);
// const result5_3 = getGeneric(ccc);

// /* 6. 인자가 여러개인 generic 타입 */
// // prettier-ignore
// function getGenerics<MyType1, MyType2, MyType3>(arg1:MyType1, arg2:MyType2, arg3:MyType3):[MyType3, MyType2, MyType1]{
//   return [arg3, arg2, arg1]
// }
// const result6 = getGenerics("철수", "다람쥐초등학교", 8);

// /* 7. generic - 축약 1  */ // 타입 이름만 바꿨다.
// // prettier-ignore
// function getGenericsT<T1, T2, T3>(arg1:T1, arg2:T2, arg3:T3):[T3, T2, T1]{
//   return [arg3, arg2, arg1]
// }
// const result7 = getGenericsT("철수", "다람쥐초등학교", 8);

// /* 8. generic - 축약 2  */ // 타입 이름만 바꿨다.
// // prettier-ignore
// function getGenericsTUV<T, U, V>(arg1:T, arg2:U, arg3:V):[V, U, T]{
//   return [arg3, arg2, arg1]
// }
// const result8 = getGenericsTUV<string, string, number>(
//   "철수",
//   "다람쥐초등학교",
//   8
// );
// // 👇🏻 useState도 받은 형태를 사용하도록 만들어져 있기 때문에, generic 타입으로 타입을 지정해주는 것이다.

// /* 9. generic - useState */
// const [school, setSchool] = useState<string>("다람쥐 초등학교");

// /* 10. generic - 화살표 함수  */
// // prettier-ignore
// const getGenericsTUV2 = <T, U, V>(arg1:T, arg2:U, arg3:V):[V, U, T] => {
//   return [arg3, arg2, arg1]
// }
