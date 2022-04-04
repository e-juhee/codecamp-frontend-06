import { Component } from "react";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  // extends Component : Component 기능으로 확장한다. 컴포넌트 기능을 가진 클래스가 된다. 이게 없으면 컴포넌트가 아니고 클래스일 뿐이다.
  state = {
    // Component에서 제공해주는 기능이다. (이름을 바꿀 수 없다.)
    // setState는 내장되어있다.
    count: 0,
  };

  onClickCounter() {
    console.log("온클릭카운터 실행!");
    console.log(this.state.count);
    // this.setState({ // setState도 객체 형태이다. prev도 사용 가능하다.
    //     // count: this.state.count + 1
    // })
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  }

  render() {
    // Component에서 제공해주는 기능이다. return 대신
    return (
      <div>
        {/* this: 이 클래스 자체를 의미한다 */}
        <div>현재 카운트 {this.state.count}</div>
        <button onClick={this.onClickCounter.bind(this)}>카운트 올리기!</button>
      </div>
    );
  }
}
