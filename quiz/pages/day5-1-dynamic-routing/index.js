// import axios from 'axios'
import {useMutation,gql} from '@apollo/client'
import { useRouter } from 'next/router'
import {useState} from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String, $createProductInput:CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput){
                _id
                number
                message
        }
    }
`

export default function Day5RoutingPage(){


    const router = useRouter()

    //input  state
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")


    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickButton = async () => {
    
    try{
        const result = await createProduct({
            variables: {seller: seller, createProductInput: {name: name, detail: detail, price: price}} 
        })
        console.log(result)
        console.log(result.data.createProduct.message)
        console.log('상품 ID: '+result.data.createProduct._id)
        console.log(result.data.createProduct)
        alert('상품이 정상적으로 등록되었습니다.')
        console.log(result.data.createProduct._id)
        router.push(`/day5-2-dynamic-routed/${result.data.createProduct._id}`)

    }catch(error){
        alert(error.message)
    }    
        
    }


    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }
    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }
    const onChangePrice = (event) => {
        setPrice(Number(event.target.value))
    }


    return(
        <>
            판매자: <input type="text" onChange={onChangeSeller}/><br/>
            상품명: <input type="text" onChange={onChangeName}/><br/>
            상세 설명:  <input type="text" onChange={onChangeDetail}/><br/>
            가격:  <input type="text" onChange={onChangePrice}/><br/>
            <button onClick={onClickButton}>GraphQL-API 요청하기</button>
        </>
    )
}