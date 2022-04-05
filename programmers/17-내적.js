function solution(a, b) {
return a.map((el,index)=>el*b[index]).reduce((acc,cur)=>acc+cur)
}