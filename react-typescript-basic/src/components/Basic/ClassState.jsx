import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    // state 초기화
    this.state = {
      banana: "바나나",
    };

    // 이벤트 핸들러를 클래스에 바인딩
    this.handleClick = this.handleClick.bind(this);
  }

  // 버튼 클릭 시 호출될 메서드 정의
  handleClick() {
    // setState를 사용해 state 변경
    this.setState(() => ({
      banana: "banana",
    }));
  }

  render() {
    return (
      <div>
        <p>바나나 바꾸기</p>
        <button onClick={this.handleClick}>Click Me</button>
        <h2>{this.state.banana}</h2>
      </div>
    );
  }
}

export default ClickCounter;
