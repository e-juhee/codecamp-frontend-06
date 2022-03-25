function solution(x, n) {
    const answer = [];
    
    for(let i=1; i <= n; i++){
        answer.push(i*x);
    }
    return answer;
}


//map 활용하기
function solution(x, n) {
    const answer = new Array(n)
                            .fill(1)
                            .map((num,i)=>{
                                return (num+i) * x
                            })
return answer
}