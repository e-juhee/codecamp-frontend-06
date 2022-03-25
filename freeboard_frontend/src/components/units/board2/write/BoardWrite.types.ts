import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";

/* BoardWrite.container */
export interface IBoardWriteProps { //이 함수를 import 받고 있는 화면에서 보내는 데이터들의 타입을 지정해서 받아야 한다.
    isEdit: boolean
    data?: any
}
export interface IVariables {
    boardId: string
    password : string
    updateBoardInput?: IUpdateBoardInput
    }
    interface IUpdateBoardInput {
        title?: string
        contents?:string
        youtubeUrl?: string
        boardAddress?: IBoardAddress
        }
    
        interface IBoardAddress {
            zipcode?: string
            address?:string
            addressDetail?: string
            }

/* BoardWrite.presenter */
export interface IBoardWriteUIProps{ //container에서 props에 담아서 presenter로 보낸 애들
    isEdit: boolean
    isActive : boolean
    setIsActive : Dispatch<SetStateAction<boolean>>

    writerError: string
    passwordError: string
    titleError: string
    contentsError: string

    onChangeWriter: (e: ChangeEvent<HTMLInputElement>)=>void //변경될 때마다 event가 들어오기 때문에 인자 타입을 넣어줘야 함
    onChangePassword: (e: ChangeEvent<HTMLInputElement>)=>void
    onChangeTitle: (e: ChangeEvent<HTMLInputElement>)=>void
    onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>)=>void
    onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>)=>void 
    onChangeZipcode: (e: ChangeEvent<HTMLInputElement>)=>void 
    onChangeAddress: (e: ChangeEvent<HTMLInputElement>)=>void 
    onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>)=>void 
    
    onClickCreate: ()=>void //void: 리턴값이 일정하지 않을 때
    onClickUpdate: ()=>void //매개변수가 없으면 안에 안 넣어도 됨

    data: any
}

export interface ICreateButtonProps{
    isActive: boolean
}




    
    
