//컨테이너 컴포넌트

import ProductWriteUI from "./ProductWrite.presenter" // ./: 현위치에서
import {useMutation} from '@apollo/client'
import {useState} from 'react'
import {CREATE_PRODUCT, UPDATE_PRODUCT} from './ProductWrite.queries'
import {useRouter} from 'next/router'

export default function ProductWrite(props){

    const router = useRouter()

    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState("")


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



    //등록하기 버튼 클릭
    const [createProduct] = useMutation(CREATE_PRODUCT)
    const onClickButton = async () => {
    
        try{
            const result = await createProduct({
                variables: {seller: seller, createProductInput: {name: name, detail: detail, price: price}} 
            })
            console.log(result.data)
            alert('상품이 등록되었습니다.')
            console.log(result.data.createProduct._id)
            router.push(`/day8-products/${result.data.createProduct._id}`)
    
        }catch(error){
            alert(error.message)
        }    
    }
    
    
    const [updateProduct] = useMutation(UPDATE_PRODUCT)
    /* 수정 버튼 클릭*/
    const onClickUpdate = async ()=>{
        console.log('router')
        console.log(router.query.productId)
        await updateProduct({
            variables: {productId: router.query.productId, updateProductInput: {name: name, detail: detail, price: price}} 
        })
        alert('수정이 완료되었습니다.')
        router.push(`/day8-products/${router.query.productId}`) 
        //myNumber는 경로에서 가져온 것이다.
        //router.query.myNumber는수정화면에서 사용 가능 ! 등록 화면의 경로에는 myNumber가 없기 때문이다.
        // updateBoard를 result에 담아서 오른쪽처럼 써도 된다. ${result.data.updateBoard.number}
    }






    return(
        <ProductWriteUI 
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        onClickButton={onClickButton}
        onClickUpdate={onClickUpdate}
        isEdit={props.isEdit}
        />
    )
}

