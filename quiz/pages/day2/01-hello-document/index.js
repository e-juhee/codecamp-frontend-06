export default function HelloDocumentPage(){

    function onClickBtn(){
        let btnText = document.getElementById("btn").innerText
        if(btnText==="안녕하세요"){
            document.getElementById("btn").innerText = "반갑습니다"
        } else{
            document.getElementById("btn").innerText = "안녕하세요"
        }
    }

    return(
        <>
            <button id="btn" onClick={onClickBtn}>안녕하세요</button>
        </>
    )
}