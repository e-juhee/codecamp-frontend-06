import styled from '@emotion/styled'
import { useState } from 'react'

const Row = styled.div`
display: flex;
border: 1px solid gray;
height: 30px;
`
const Column = styled.div`
width:25%;
`
const Head = styled.div`
width:25%;
background-color: lightgray;
`

export default function Day7QuizPage(){

        
        const dataList = [
            {id:1, title:"9월달 시스템 점검 안내입니다.", date: "2022.09.19"},
            {id:2, title:"안녕하세요! 공지사항 전달드립니다.", date: "2022.09.17"},
            {id:3, title:"개인정보 처리방침 변경 사전 안내", date: "2022.09.15"},
            {id:4, title:"iOS 10.0 이하 지원 중단 안내", date: "2022.09.13"},
            {id:5, title:"이용약관 변경 사전 안내", date: "2022.09.10"},
            {id:6, title:"개인정보 처리방침 변경 사전 안내", date: "2022.08.19"},
        ]


        const [checkedList, setCheckedList] = useState([]);
        const [one, setOne] = useState();
        const [all, setAll] = useState();


        const onCheckedAll = (e) => {
            console.log(e)
            // console.log(checkedList.includes(1))
            // setCheckedList(e.target.checked ? dataList : [])
            console.log(checkedList)
            // e.target.checked ? checkedListLength=6 : checkedListLength=0;
            checkedList.length===6 ? setAll("true") : setAll("false")
            console.log(checkedList.length)
            //리스트에 몇개들어왓는지 확인해서, 총 길이랑 같으면 true ㅇ아니면 ㄴㄴ
        }

        const onCheckedOne = (e) => {
            console.log(e)
            console.log(e.target)
            let a;
            e.target.checked ? checkedList.push(e.target.id) : checkedList.pop()
            console.log(checkedList.length)
            checkedList.length === 6 ? setAll(true): setAll(false)
            console.log(checkedList)
        }

   


    return (
        <>
                <Row key="0">
                    <Head><input type="checkbox"
                                onChange={onCheckedAll}
                                checked={all}/>
                    </Head>
                    <Head>번호</Head>
                    <Head>제목</Head>
                    <Head>작성일</Head>
                </Row>

                {dataList.map((el) => (
                        <Row key={el.id} >
                            <Column><input id={el.id} type="checkbox"
                                            onChange={onCheckedOne}
                                            checked={one}/>
                            </Column>
                            <Column>{el.id}</Column>
                            <Column>{el.title}</Column>
                            <Column>{el.date}</Column>
                        </Row>
                ))}
        </>
    )
}