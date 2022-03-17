import axios from 'axios'
import {useState} from 'react'

export default function RestGetPage(){
        
    const [userData, setUserData] = useState("")

    const callRestApi = async () => {
        const result = await axios.get('https://koreanjson.com/users')
        console.log(result.data)
        rendering(result);//받은 데이터를 테이블로 나타내는 함수
    }

    const rendering = (userArr) => {
        const result = [];
        for (let i = 0; i < 10; i++) {
            const user =userArr.data[i];
            result.push(<tr key={i}><td style={style}>{user.id}</td><td>{user.name}</td><td>{user.username}</td></tr>);
        }
        setUserData(result);
    };

    // 테이블에 사용할 CSS
    const style = {
        border:"1px solid gray",
        borderCollapse: "collapse"
    }

    return(
        <>
            <button onClick={callRestApi}>REST-API 요청하기</button>
            <table style={style}>
                <thead>
                    <tr style={style}>
                    <th>No</th><th>이름</th><th>User Name</th>
                    </tr>
                </thead>
                <tbody>{userData}</tbody>
            </table>    
        </>
    )
}