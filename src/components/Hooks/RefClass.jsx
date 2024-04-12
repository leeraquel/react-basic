import { Component, createRef } from "react";

export default class RefClass extends Component {
  input = createRef();

  render() {
    return (
      <>
        <div>클래스형 useRef 기능 쓰기</div>
        <input type="text" ref={this.input} />
        <button
          type="button"
          onClick={() => {
            this.input.current.focus();
          }}
        >
          on focus btn
        </button>
        <br></br>
      </>
    );
  }
}
