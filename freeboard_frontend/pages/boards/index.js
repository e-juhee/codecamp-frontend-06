import Boards from "../../src/components/units/board/list/Boards.container";




export default function MapBoardPage(){
    
  
    return (
        // 빈 태그와 fragment의 차이: 빈 태그에는 키를 쓸 수 없고, Fragment에는 key를 쓸 수 있다.
        //<Fragment key={el.number}></Fragment>
        <Boards/>
    )
}