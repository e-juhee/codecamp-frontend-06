export default function TypescriptPage(){
    
    interface IProfile {
        name: string
        age: number
        school: string
        hobby?: string
    }

    /* 유틸리티 타입 */
    //기존에 있는 타입을 개조해서 쓴다.

    //1. Pick 타입
    type MyType1 = Pick<IProfile, "name" | "age">

    //2. Omit 타입 : 제외하고
    type MyType2 = Omit<IProfile, "school"> 

    //3. Partial 타입: 전체 다 있을 수도 있고 없을 수도 있게
    type MyType3 = Partial<IProfile>

    //4. Required 타입: 다 필수
    type MyType4 = Required<IProfile>

    //5. Record 타입 : 여기에 정해놓은 것만 값으로 쓸 수 있다.
    type ZZZ = "aaa" | "qqq" | "rrr" //Union 타입
    // let apple: ZZZ
    // apple = "aaa"
    type MyType5 = Record<ZZZ, IProfile> //ZZZ에 들어있는게 키가 되고 IProfile이 value가 된다. 각각의 프로필 티입이 생긴다.



    /*추가(선언병합): 인터페이스와 타입의 차이*/
    interface IProfile { //인터페이스는 같은 이름으로 또 만들 수 있다. // 같은 이름의 것들이 합쳐진다.
        candy: number
    }
    let profile: IProfile
    profile={
        candy:3,
        age:10,
        hobby:"dsf"
    }



    return <div>타입스크립트 연습하기</div>
    
}