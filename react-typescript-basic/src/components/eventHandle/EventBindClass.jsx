import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // handleClick 메서드를 현재 인스턴스에 바인딩
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 'this'를 사용해 state에 접근하고 setState를 호출
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Click me! Count is {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClickCounter;
