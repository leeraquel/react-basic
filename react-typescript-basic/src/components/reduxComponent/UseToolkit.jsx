import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  increase,
  decrease,
  reset,
} from "../store/slice/countSlice";
import { useRef } from "react";

export default function UseToolkit() {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  return (
    <>
      <h2>툴킷 사용하기</h2>
      <div>count : {count}</div>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
      <br />
      <input type="number" ref={inputRef} />
      <br />
      <button
        onClick={() => dispatch(increase(Number(inputRef.current.value)))}
      >
        증가
      </button>
      <button
        onClick={() => dispatch(decrease(Number(inputRef.current.value)))}
      >
        감소
      </button>
      <button onClick={() => dispatch(reset())}>리셋</button>
    </>
  );
}
