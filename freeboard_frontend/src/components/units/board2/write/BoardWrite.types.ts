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

    onChangeWriter: (e: ChangeEvent<HTMLInputElement>)=>void
    onChangePassword: (e: ChangeEvent<HTMLInputElement>)=>void
    onChangeTitle: (e: ChangeEvent<HTMLInputElement>)=>void
    onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>)=>void
    onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>)=>void 
    onChangeZipcode: (e: ChangeEvent<HTMLInputElement>)=>void 
    onChangeAddress: (e: ChangeEvent<HTMLInputElement>)=>void 
    onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>)=>void 
    
    onClickCreate: (e: MouseEvent<HTMLButtonElement>)=>void //void: 리턴값이 일정하지 않을 때
    onClickUpdate: (e: MouseEvent<HTMLButtonElement>)=>void

    data: any
}

export interface ISubmitButton{
    isActive: boolean
}




    
    
