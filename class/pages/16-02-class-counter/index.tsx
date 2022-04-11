import { Component } from "react";

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  // extends Component : Component 기능으로 확장한다. 컴포넌트 기능을 가진 클래스가 된다. 이게 없으면 컴포넌트가 아니고 클래스일 뿐이다.
  // state와 render를 제공해준다.
  state = {
    // Component에서 제공해주는 기능이다. (이름을 바꿀 수 없다. 순수한 Class에서는 사용 불가)
    // setState는 내장되어있다.
    count: 0,
  };

  onClickCounter() {
    console.log("온클릭카운터 실행!");
    console.log(this.state.count);
    // this.setState({
    //     // count: this.state.count + 1
    // })

    // state가 객체이기 때문에, setState도 객체이다.
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  }

  render() {
    // 함수형 컴포넌트에는 return이 있지만, Class에는 return 기능이 없어서 Component가 제공하는 render 함수를 사용한다.
    return (
      <div>
        {/* this: 이 클래스 자체를 의미한다. */}
        {/* 이 클래스의 state 객체 안에 들어있기 때문에 this.state.count로 사용한다. */}
        <div>현재 카운트 {this.state.count}</div>

        {/* this는 누가 실행시켰느냐에 따라서 달라진다.
        onClick이 실행되면 this는 window가 된다. */}
        <button onClick={this.onClickCounter.bind(this)}>카운트 올리기!</button>
      </div>
    );
  }
}
