import { useState } from 'react'

export default function HelloStatePage(){
    const [btnText, setBtnText] = useState("안녕하세요")

    function onClickBtn(){
        if(btnText==="안녕하세요"){
            setBtnText("반갑습니다")
        } else{
            setBtnText("안녕하세요") 
        }
    }

    return(
        <>
            <button onClick={onClickBtn}>{btnText}</button>
        </>
    )
}


