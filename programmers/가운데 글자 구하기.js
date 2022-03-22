/*
운데 글자 가져오기
문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
입출력 예
s	return
"abcde"	"c"
"qwe
r"	"we"
*/

function solution(s) {
    var answer = '';
    if(s.length%2===0){
        answer = s[s.length/2-1] + s[s.length/2]
    }else{
        answer = s[Math.trunc(s.length/2)]
    }
    return answer;
}

//s 의 가운데 글자 반환
// 짝수면 가운데 두글자

//lenth = 5
//5/2 = trunc(2.5) = 2번째 인덱스 ㄱ
//length = 4 /2 = 2 -> 1,2번째 인덳스

//5를 넣으면 2가 나오고
//4를 넣으면 1,2가 나와야함
//2로 넣어서 나머지가 0이면 나눈 값과 -1
//2로 넣어서 나머지가 1이면 나눈 값의 trunc