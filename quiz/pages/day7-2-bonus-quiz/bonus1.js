const classmates = [
    {name:"철수", age:10, school: "토끼초등학교"},
    {name:"영희", age:13, school: "다람쥐초등학교"},
    {name:"훈이", age:11, school: "토끼초등학교"}
  ]
  
  
  //bonus1-1
  const quiz1 = classmates.filter((el)=>(
    el.school==="토끼초등학교"
      ));
  quiz1.map((el)=>({
    name:el.name, age:el.age, school:el.school, candy:10
      }));
  
  
  //bonus1-2
  const quiz2 = classmates.filter((el)=>(
    el.school==="다람쥐초등학교"
      ));
  quiz2.map((el)=>({
    name:el.name+"어린이", age:el.age, school:el.school
      }));