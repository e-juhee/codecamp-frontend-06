import ProductsUI from "./Notices.presenterjs" // ./: 현위치에서
import {useMutation, useQuery} from '@apollo/client'
import {FETCH_PRODUCTS, DELETE_PRODUCT} from './Notices.queries'


export default function Products(){

    const { data } = useQuery(FETCH_PRODUCTS)
    
    const [deleteProduct] = useMutation(DELETE_PRODUCT)

    //event.target : 태그
    const onClickDelete = (event) => {
        deleteProduct({
            variables:{productId:(event.target.id)},
            refetchQueries: [{query:FETCH_PRODUCTS}]
        })
        console.log(event.target.id)
    }
    return(
        // 자동완성으로 엔터 치면 자동으로 Import가 된다.
        <ProductsUI 
            // props라는 객체가 생성되어 함수가 value로 들어가서 props를 통해 전달된다.
            // 키는 자유롭게 지정이 가능하나, 가급적 통일한다.
            // 자식에게 보낼 데이터를 적는다.
            onClickDelete={onClickDelete} 
            data={data}
        />
    )
}

