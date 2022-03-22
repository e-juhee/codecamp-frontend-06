//default는 중괄호가 없어도 된다.import 받을 때 이름을 마음대로 바꿔서 받아도 된다.
import * as S from './Products.style'

export default function ProductsUI(props){
    return(
        <>
            <S.Row>
                <S.Title></S.Title>
                <S.Title>NO</S.Title>
                <S.Title>product ID</S.Title>
                <S.Title>seller</S.Title>
                <S.Title>name</S.Title>
                <S.Title>detail</S.Title>
                <S.Title>price</S.Title>
                <S.Title>
                </S.Title>
            </S.Row>

            {props.data?.fetchProducts.map((el,index)=>( //인자로 index를 써서 사용할 수 있음: 순서, 필요 없으면 안 써도 됨
                // index로 키를 주면 안된다. 완전 고유한 id같은 걸 줘야 한다.
                <S.Row key={el._id}>
                    <S.Column><input type="checkbox" /></S.Column>
                    <S.Column>{index}</S.Column>
                    <S.Column>{el._id}</S.Column>
                    <S.Column>{el.seller}</S.Column>
                    <S.Column>{el.name}</S.Column>
                    <S.Column>{el.detail}</S.Column>
                    <S.Column>{el.price}</S.Column>
                    <S.Column>
                        {/* html과 js를 연결해주는 이벤트 핸들러 함수 */}
                        <S.Button id={el._id} onClick={props.onClickDelete}>삭제하기</S.Button> 
                    </S.Column>
                </S.Row>
            ))}
        </>
    )
}