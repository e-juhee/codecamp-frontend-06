//프리젠터 컴포넌트

export default function ProductWriteUI(props){

    return(
        <>
            <h1>{props.isEdit ? "수정" : "등록"}페이지</h1>
            {props.isEdit ? "" :  <span>판매자: <input type="text" onChange={props.onChangeSeller}/><br/> </span>}
           
            
            상품명: <input type="text" onChange={props.onChangeName}/><br/>
            상세 설명:  <input type="text" onChange={props.onChangeDetail}/><br/>
            가격:  <input type="text" onChange={props.onChangePrice}/><br/>
            <button onClick={props.isEdit? props.onClickUpdate : props.onClickButton}>{props.isEdit ? "수정" : "등록"}하기</button>
        </>
    )
}