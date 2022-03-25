function solution(n) {
    let answer = 0;
    for(let i=1;i<n+1;i++){
        if(n/i === Math.trunc(n/i)){
            answer = answer + i
        }
    }
    
    return answer;
}

function solution(n) {
    let answer = n;
    for(let i=1;i<=n/2;i++){
        if(n%i===0){
            answer = answer + i
        }
    }   
    return answer;
}

function solution(n) {
    const answer = new Array(n)
                    .fill(1)
                    .reduce((acc,cur,i)=>{
                        return n % (cur+i) === 0
                            //약수가 맞다면, 약수를 더한 값을 다음으로 넘겨주고
                            ? acc + (cur+i)
                            //약수가 아니라면, 더하지 않고 그냥 다음으로 넘겨준다.
                            : acc
                    },0 )
    return answer;
}

// 배열이 비어있으면(undefined) 메소드를 사용할 수 없다.
// 그래서 fill을 사용해서 배열을 채워준다.
// 기억해두자!! new Array(n).fill(1)
// 기억해두자! i를 추가하면 index를 활용할 수 있다.


/*
약수의 합
문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 사항
n은 0 이상 3000이하인 정수입니다.
입출력 예
n	return
12	28
5	6
입출력 예 설명
입출력 예 #1
12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

입출력 예 #2
5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.
*/