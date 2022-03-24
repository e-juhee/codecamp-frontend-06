function solution(array, commands) {
    var answer = [];
    for(let n=0; n<commands.length; n++){
        let i = commands[n][0] -1
        let j = commands[n][1]
        let k = commands[n][2] -1
        answer[n] = array.slice(i,j).sort((a,b)=>a-b)[k]
    }
    return answer;
}
