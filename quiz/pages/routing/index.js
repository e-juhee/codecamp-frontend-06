import { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage(){
    const router = useRouter()

    const [Writer, setWriter] = useState("")
    const [Product, setProduct]= useState("")
    const [Contents, setContents] = useState("")
    const [Price, setPrice] = useState("")

    const [data, setData] = useState("")
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const callGraphqlApi = async () => {

        try { 
            const result = await createProduct({
                variables: { seller: Writer, createProductInput : {name: Product, detail : Contents, price : Number(Price)}  }
            }) 
            console.log(result)
            console.log(result.data)
            console.log(result.data.createProduct)
            console.log(result.data.createProduct.message)
            // alert("게시글 등록에 성공했어요!")
            // alert("상세 페이지로 이동해볼까요?!")    
            router.push(`/routed/${result.data.createProduct._id}`) 

        

        } catch(error){



                alert(error.message)}
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeProduct = (event) => {
        setProduct(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }
    
    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }

    return (
        <div>
            
            판매자 : <input type="text" onChange={onChangeWriter} /><br />
            상품명 : <input type="text" onChange={onChangeProduct} /><br />
            상품 내용: <input type="text" onChange={onChangeContents} /><br />
            상품 가격: <input type="text" onChange={onChangePrice} />원<br />
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
        </div>
    )
}