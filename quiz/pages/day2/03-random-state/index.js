import { useState } from 'react'

export default function RandomStatePage(){
    const [auth, setAuth] = useState('000000')

    function onClickBtn(){
        let token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        setAuth(token)
    }

    return(
        <>
            <div>{auth}</div>
            <button onClick={onClickBtn}>인증번호전송</button>
        </>
    )
}