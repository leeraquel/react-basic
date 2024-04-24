import { Component, createRef } from "react";

export default class RefClass extends Component {
  input = createRef();
  localVar = createRef();
  state = {
    state: 0,
  };

  handleLocalClick() {}

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
        <div>this.localVar.current : {this.localVar.current}</div>
        <div>this.state.state : {this.state.state}</div>
        <button>localVar + 1</button>
        <button>state + 1</button>
      </>
    );
  }
}
