function solution(n) {
    let answer = 0;
    //인덱스 값으로 접근하기 위해 문자열 타입으로 변환
    n = String(n);
    
    for(let i=0; i<n.length; i++){
        answer+= Number(n[i]);
    }
    return answer
}

//reduce 사용
function solution(n) {
    const answer = n.toString().split("") //String(n)과 같다. 문자열 타입으로 변환해준다.
                    .reduce((acc,cur)=>{
                        console.log(acc,cur)
                        return acc + Number(cur); //return 해야만 앞에있는 데이터를 뒤로 넘겨온다
                    },0)
return answer
}


/*String(n)과 n.toString()의 차이*/

// String(123)

// //123.toString() 변수 담지 않고 사용하면 에러가 난다. / MDN에 검색해보고 또다른 어떤 기능을 가지ㅗㄱ 있는지 검색해보기
// let a = 123;
// a.toString();


