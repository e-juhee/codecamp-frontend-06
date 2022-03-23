import styled from '@emotion/styled'

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

    return (
        <>
                <Row>
                    <Head><input type="checkbox"/></Head>
                    <Head>번호</Head>
                    <Head>제목</Head>
                    <Head>작성일</Head>
                </Row>
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>1</Column>
                    <Column>제목6</Column>
                    <Column>2022.03.23</Column>
                </Row>
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>2</Column>
                    <Column>제목5</Column>
                    <Column>2022.03.22</Column>
                </Row>
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>3</Column>
                    <Column>제목4</Column>
                    <Column>2022.03.21</Column>
                </Row>
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>4</Column>
                    <Column>제목3</Column>
                    <Column>2022.03.20</Column>
                </Row>
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>5</Column>
                    <Column>제목2</Column>
                    <Column>2022.03.19</Column>
                </Row>
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>6</Column>
                    <Column>제목1</Column>
                    <Column>2022.03.18</Column>
                </Row>
        </>
    )
}