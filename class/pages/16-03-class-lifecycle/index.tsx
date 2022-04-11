import { Component, createRef } from "react";
import Router from "next/router"; // useRouter 이런 거 없음. Router를 통째로 import ㄱㄱ

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  inputRef = createRef<HTMLInputElement>(); // ref : 태그 자체를 참조한다. 태그를 변수에 넣어놓고 다닌다. 변수명 자유

  state = {
    count: 0,
  };

  // 화면이 렌더됐을 때 한번 실행된다.
  componentDidMount() {
    console.log("마운트됨!");
    // 활용: input창 자동 포커싱
    this.inputRef.current?.focus();
  }

  // 리렌더 될 때마다 실행된다. (counter가 증가할 때)
  componentDidUpdate() {
    console.log("수정되고 다시 그려짐!");
  }

  // 컴포넌트가 화면에서 사라질 때 실행된다.
  componentWillUnmount() {
    console.log("컴포넌트 사라짐!");
    // 활용: 나가기 버튼을 누르지 않고 다른 메뉴를 눌러서 채팅방을 나갔을 경우, 채팅방 나가기 api 요청
  }

  onClickCounter() {
    console.log("온클릭카운터 실행!");
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  }

  onClickMove() {
    Router.push("/");
  }

  render() {
    return (
      <div>
        {/* 이 태그에 inputRef를 연결 */}
        <input type="text" ref={this.inputRef} />
        <div>현재 카운트 {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트 올리기!</button>
        <button onClick={this.onClickMove}>나가기!!!</button>
      </div>
    );
  }
}
