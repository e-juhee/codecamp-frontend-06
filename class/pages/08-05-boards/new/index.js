//등록하기 페이지

import BoardWrite from "../../../src/components/units/board/08-board-write/BoardWrite.container"


export default function BoardNewPage(){

    // const myaaa="사과"
    
    // return <BoardWrite aaa={myaaa} /> //숫자, 객체, 배열 어떤 것이든 상관 없다.
    return <BoardWrite isEdit={false} />
    // isEdit 안써서 undefined로 활용할 수도 있다.
}