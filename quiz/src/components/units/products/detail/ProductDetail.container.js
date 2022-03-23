import ProductDetailUI from "./ProductDetail.presenter" // ./: 현위치에서
import {useQuery} from '@apollo/client'
import { useRouter } from 'next/router'
import {FETCH_PRODUCT} from './ProductDetail.queries'


export default function ProductDetail(){
        const router = useRouter()
        console.log(router)
        console.log(router.query)
        console.log('query')
        console.log(router.query)
    
        const { data } = useQuery(FETCH_PRODUCT, {
            variables: {productId : router.query.productId} //폴더명
        })
        console.log(data)
    
        const onClickUpdate =()=>{
            router.push(`/day8-products/${router.query.productId}/edit`)
        }



    return(
        // 자동완성으로 엔터 치면 자동으로 Import가 된다.
        <ProductDetailUI 
            // props라는 객체가 생성되어 함수가 value로 들어가서 props를 통해 전달된다.
            // 키는 자유롭게 지정이 가능하나, 가급적 통일한다.
            // 자식에게 보낼 데이터를 적는다.
            data ={data}
            onClickUpdate={onClickUpdate}
            // isActive={isActive}
        />
    )
}
