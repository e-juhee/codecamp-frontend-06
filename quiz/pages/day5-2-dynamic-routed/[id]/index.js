import {useQuery, gql} from '@apollo/client'
import { useRouter } from 'next/router'


const FETCH_PRODUCT = gql`
    query fetchProduct($productId:ID){
        fetchProduct(productId:$productId){
            _id
            seller
            name
            detail
            price
        }
    }
`

export default function Day5RoutedPAge(){
    const router = useRouter()
    console.log(router)
    console.log(router.query)

    const { data } = useQuery(FETCH_PRODUCT, {
        variables: {productId : router.query.id}
    })
    
    console.log(data)

    return (
        <>
        {/* data ? data.fetchProfile : undefined */}
            <div>판매자: {data? data.fetchProduct.seller : 'loading...'}</div>
            <div>상품명: {data?.fetchProduct.name}</div>
            <div>상세 설명: {data?.fetchProduct.detail}</div>
            <div>가격: {data?.fetchProduct.price}</div>
        </>
    )
}