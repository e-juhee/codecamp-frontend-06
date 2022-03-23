function solution(s) {
    var answer = false;
    if(
        s == Number(s) && (s.length===4 || s.length===6) ){
         answer = true;}
    
    // console.log('1' == Number('1'))
    return answer;
}