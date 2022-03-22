import {useQuery, gql, useMutation} from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql`
query fetchBoards{
    fetchBoards{
        number
        writer
        title
        contents
    }
}
`
const DELETE_BOARD = gql`
mutation deleteBoard($number:Int){
    deleteBoard(number:$number){
        message
    }
}`

const Row = styled.div`
display: flex;
`
const Column = styled.div`
width:20%;
`

export default function MapBoardPage(){
    
    const { data } = useQuery(FETCH_BOARDS)
    
    const [deleteBoard] = useMutation(DELETE_BOARD)

    //event.target : 태그
    const onClickDelete = (event) => {
        deleteBoard({
            variables:{number:Number(event.target.id)},
            refetchQueries: [{query:FETCH_BOARDS}]
        })
    }
    return (
        // 빈 태그와 fragment의 차이: 빈 태그에는 키를 쓸 수 없고, Fragment에는 key를 쓸 수 있다.
        //<Fragment key={el.number}></Fragment>
        <>
            {data?.fetchBoards.map((el)=>( //인자로 index를 써서 사용할 수 있음: 순서, 필요 없으면 안 써도 됨
                // index로 키를 주면 안된다. 완전 고유한 id같은 걸 줘야 한다.
                <Row key={el.number}>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.writer}</Column>
                    <Column>
                        {/* html과 js를 연결해주는 이벤트 핸들러 함수 */}
                        <button id={el.number} onClick={onClickDelete}>삭제하기</button> 
                    </Column>
                </Row>
            ))}
            
        </>
    )
}