function solution(s) {
    var answer = false;
    if(
        s == parseInt(s) && (s.length===4 || s.length===6) ){
         answer = true;
    }
    return answer;
}


function solution(s) {
    if(s.length !== 4 && s.length !==6){
        return false;
    }
    for(let i=0; i<s.length; i++){
        if(isNaN(s[i])===true){
            return false;
        }
    }
    return true;
}

function solution(s) {
    if(s.length !== 4 && s.length !==6){
        return false;
    }
    const answer = s.split("") //배열로 만들어줌
                     .filter(num => {
                         //데이터가 숫자가 아닌 문자일 경우만 남긴다.
                         //isNaN의 결과가 true인 경우 (NaN 값인 경우)
                         console.log(num, isNaN(num))
                        return isNaN(num) === true
                       }) 
    console.log(answer)
    return answer.length === 0
}