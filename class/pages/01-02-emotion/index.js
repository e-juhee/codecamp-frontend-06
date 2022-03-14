import { MyTitle, MyInput, MyId, MyLable, MyPassword } from "../../styles/emotion"

export default function AAAPage() {


    //여기는 자바스크립트 쓰는 곳

  return (
    <MyTitle>
        로그인
        <MyInput>
            <MyLable>아이디</MyLable>
            <MyId type="text"/>
            <MyLable>비밀번호</MyLable>
            <MyPassword type="text"/>
        </MyInput>
    </MyTitle>
  )
}
