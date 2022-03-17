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
const CREATE_BOARD = gql`
    mutation createBoard($writer:String, $title:String, $contents:String){
        createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
        }
    }
`

export default function Day4Page(){
    //CREATE_PRODUCT
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")

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


    //CREATE_BOARD
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")

    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickBoardButton = async () => {
        const board = await createBoard({
            variables: {writer: writer, title: title, contents:contents} 
        })
        console.log(board.data.createBoard.message)
        console.log('게시글 No. '+board.data.createBoard.number)
        console.log(board.data.createBoard)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }
    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents = (event) => {
        setContents(event.target.value)
    }

    return(
        <>
            <h1>상품 등록</h1>
                작성자: <input type="text" onChange={onChangeSeller}/><br/>
                상품명: <input type="text" onChange={onChangeName}/><br/>
                상세: <input type="text" onChange={onChangeDetail}/><br/>
                가격: <input type="number" onChange={onChangePrice}/><br/>
                <button onClick={onClickButton}>완료</button>
            <br/><br/><br/><br/>
            <h1>게시글 등록</h1>
                작성자: <input type="text" onChange={onChangeWriter}/><br/>
                제목: <input type="text" onChange={onChangeTitle}/><br/>
                내용: <input type="text" onChange={onChangeContents}/><br/>
                <button onClick={onClickBoardButton}>완료</button>
        </>
    )
}