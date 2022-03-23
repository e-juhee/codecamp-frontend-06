import BoardComponent from "../../src/components/units/board/08-board-component/BoardComponent";

export default function BoardNewPage(){
    
    //한 줄일 때는 return 뒤에 소괄호가 없어도 된다.
    return <BoardComponent isEdit={false}/>
    
}