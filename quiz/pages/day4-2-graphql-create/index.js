// import axios from 'axios'
import {useMutation,gql} from '@apollo/client'
import {useState} from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct($seller:String, $createProductInput : CreateProductInput!){
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }    
`

export default function Day4Page(){

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")
    const [data, setData] = useState("")

    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickButton = async () => {
        const result = await createProduct({
            variables: {seller: seller, createProductInput: {
                name: name,
                detail: detail,
                price: price
            }} 
        })
        
        console.log(result.data.createProduct.message)
        console.log('상품 ID: '+result.data.createProduct._id)
        console.log(result.data.createProduct)
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
            작성자: <input type="text" onChange={onChangeSeller}/><br/>
            상품명: <input type="text" onChange={onChangeName}/><br/>
            상세: <input type="text" onChange={onChangeDetail}/><br/>
            가격: <input type="number" onChange={onChangePrice}/><br/>
            <button onClick={onClickButton}>GraphQL-API 요청하기</button>
        </>
    )
}