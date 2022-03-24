import { MouseEvent } from "react"


export interface IBoardDetailProps { //이 함수를 import 받고 있는 화면에서 보내는 데이터들의 타입을 지정해줘야 한다. 안하면 에러
    data ?: any
    onClickToolTip : (event: MouseEvent<HTMLDivElement>)=>void
    onClickLike: (event: MouseEvent<HTMLDivElement>)=>void
    onClickDisLike: (event: MouseEvent<HTMLDivElement>)=>void
    onClickDelete: (event: MouseEvent<HTMLButtonElement>)=>void
    onClickList: (event: MouseEvent<HTMLButtonElement>)=>void
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>)=>void
}