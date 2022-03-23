function solution(s) {
    var answer = false;
    if(
        s == parseInt(s) && (s.length===4 || s.length===6) ){
         answer = true;
    }
    return answer;
}