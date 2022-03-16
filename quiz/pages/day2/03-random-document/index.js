
export default function RandomDocumentPage(){

    function onClickBtn(){
        let token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
        document.getElementById("auth").innerText = token

    }

    return(
        <>
            <div id="auth">000000</div>
            <button onClick={onClickBtn}>인증번호전송</button>
        </>
    )
}