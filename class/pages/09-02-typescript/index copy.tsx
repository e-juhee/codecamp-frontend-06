export default function TypescriptPage() {
  /* 타입 추론: 처음에 들어간 값으로 자동으로 타입이 지정된다. */
  let aaa = "안녕하세요";
  // aaa = 3;

  /* 타입 명시 */
  let bbb: string = "반갑습니다";

  /* 문자 타입 */
  let ccc: string;
  ccc = "반가워요!";
  // ccc = 3;

  /* 숫자 타입 */
  let ddd: number = 10;
  // ddd = "qqq";

  /* 불린 타입 */
  let eee: boolean = true;
  eee = false;
  // eee = "true";

  /* 배열 타입 */
  let fff: number[] = [1, 2, 3, 4, 5];
  // let fff2: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
  let ggg: string[] = ["철수", "영희", "훈이"];
  // let ggg2: string[] = ["철수", "영희", "훈이", 13];
  let hhh: (number | string)[] = ["철수", "영희", "훈이", 13]; // or과 and 연산자는 하나만 쓰면 된다.: |, &

  /* 객체 타입 */ 
  interface IProfile1 {
    name: string;
    age: string | number;
    school: string;
  }
  const profile : IProfile1 = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  }; // 타입을 지정해주지 않았지만 추론됨
    profile.age = "8살";

  interface IProfile2 {
    // 타입을 지정했으면 데이터가 꼭 있어야 한다. & 값이 있으면 타입도 꼭 지정해야 한다.
    name: string;
    age: string | number;
    school: string;
    hobby?: string; // ?를 붙이면 데이터가 없어도 된다.
  }
  const profile2: IProfile2 = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
  }; // 타입을 지정해주지 않았지만 추론됨
  profile2.age = "8살";

  /* 함수 타입 */ //함수를 만들 때 인자와 리턴값의 타입을 정한다.
  const add = (money1: number, money2: number, unit: string): string => { // 마지막 string은 리턴값
    return money1 + money2 + unit;
  };
  add(1000, 2000, "원");

  const add2 = (money1: number, money2: number, unit: string): number => { //숫자와 문자를 더하기 때문에 return이 number가 될 수 없어 에러!
    return money1 + money2 + unit;
  };
  add2(1000, 2000, "원");

  return <div>타입스크립트 연습하기</div>;
}
