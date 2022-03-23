
//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
//import SubmitButton, {WriterInput} from './BoardWrite.style'

export default function ProductDetailUI(props){
    return(
<>
        {/* data ? data.fetchProfile : undefined */}
            <div>판매자: {props.data? props.data.fetchProduct.seller : 'loading...'}</div>
            <div>상품명: {props.data?.fetchProduct.name}</div>
            <div>상세 설명: {props.data?.fetchProduct.detail}</div>
            <div>가격: {props.data?.fetchProduct.price}</div>
            <button onClick={props.onClickUpdate}>수정하기</button>
        </>
    )
}