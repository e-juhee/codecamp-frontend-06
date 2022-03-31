/* 아래의 배열처럼 변경이 없는 하드코딩 데이터는 보통 대문자로 쓴다.
위치는 다른 파일에 뽑아놓거나, 맨 위에 놓는다. : 'then, 리렌더링 되어도 새로 만들어지지 않음'
    이유는? 리렌더 이슈, 함수형 컴포넌트가 실행되고 state가 바뀌면 컴포넌트가 다시 그려지듯이! 
    함수 안에 FRUITS를 넣어 놓으면, 값이 바뀔 때마다 이 배열이 새로 생성되는것! 
    어차피 똑같아서 바뀔 일이 없고, 그렇다면 매번 새로 만들 필요가 없기 때문에 위에 따로 뽑아 놓는 것~
    state가 바뀌면 ~> use로 되어 있는 것은 새로 안만들어지는데(useState), 다른 것들은 전부 다 새로 생긴다. 함수도 똑같아도 다시 새로 만든다.
    클래스형 컴포넌트밖에 없었는데 함수형 컴포넌트가 나온 것이 use로 된 애들 덕분이다.
    나중에 리렌더되지 않게 하는 것을 배우게 될 것이다. */
const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

// export default function MapFruitsPage(){

//     const aaa = [<div>1 레드향</div>, <div>2 샤인머스캣</div>, <div>3 산청딸기</div>]

//     const bbb = ["나의 레드향", "나의 샤인머스캣", "나의 산청딸기"].map((el)=>(<div>{el}</div>))

//       const fruits2 = FRUITS.map((el)=>(<div>{el.number} {el.title}</div>)) //태그 안에 들어가기 때문에 태그 안에 {중괄gh}를 쓰지 않으면 문자열이 되어버린다!
//     return (
//         <>
//             <div>{fruits2}</div>
//             {/* 위 아래 결과 같음 */}
//             {/* 실무에서는 아래와 같은 방법을 더 많이 쓴다. 보기 편하기 때문이다. */}
//             <div>
//                 {FRUITS.map((el)=>(
//                 <div>{el.number} {el.title}</div>
//                 ))}</div>
//         </>
//     )
// }
