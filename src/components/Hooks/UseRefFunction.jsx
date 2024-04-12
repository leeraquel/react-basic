import { useRef, useState } from "react";

export default function UseRefFunction() {
  const input = useRef();

  const localVar = useRef(0);
  const [stateVar, setStateVar] = useState(0);
  let justVar = 0;

  const focusInput = () => {
    console.log(input);
    console.log(input.current);
    input.current.focus();
  };

  const increaseLocalVar = () => {
    console.log(localVar);
    localVar.current++;
  };

  const increaseJustVar = () => {
    console.log(justVar);
    justVar++;
  };

  return (
    <>
      {/* useRef를 이용하여 dom 요소와 연결하여 사용, ref 속성으로 만든 ref를 전달 */}
      <input type="text" ref={input} />
      <button type="button" onClick={focusInput}>
        인풋창으로 가기
      </button>
      <div>localVar.current : {localVar.current}</div>
      <div>state : {stateVar}</div>
      <div>justVar : {justVar}</div>
      <button onClick={increaseLocalVar}>LocalVar + 1</button>
      <button
        onClick={() => {
          setStateVar(stateVar + 1);
        }}
      >
        state + 1
      </button>
      <button onClick={increaseJustVar}>justVar + 1</button>
    </>
  );
}
