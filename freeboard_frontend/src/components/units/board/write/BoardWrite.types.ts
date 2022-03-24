import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface IBoardWriteProps { //이 함수를 import 받고 있는 화면에서 보내는 데이터들의 타입을 지정해줘야 한다. 안하면 에러
    isEdit: boolean
    data?: any
}

export interface IBoardWriteUIProps{ //container에서 props에 담아서 보낸 애들 전부 타입 지정해줘야 한다.
    onSubmit: (data:any)=>void //리턴값이 일정하지 않을 때  void
    register : any
    handleSubmit : any
    errors : any
    isActive : boolean
    setIsActive : Dispatch<SetStateAction<boolean>>
    onChangeWriter: (e: ChangeEvent<HTMLInputElement>)=>voids
    onChangePassword: (e: ChangeEvent<HTMLInputElement>)=>void
    onChangeTitle: (e: ChangeEvent<HTMLInputElement>)=>void
    onChangeContent: (e: ChangeEvent<HTMLInputElement>)=>void //TextArea인데.. Input으로 안하면 빨간줄이..
    onClickUpdate: (data: any)=>void
    isEdit: boolean
    data:any
}

export interface ISubmitButton{
    isActive: boolean
}

export interface IVariables {
    boardId: string
    password : number
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
    
    
