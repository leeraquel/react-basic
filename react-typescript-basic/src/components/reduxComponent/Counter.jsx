import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const number = useSelector((state) => state);
  const dispatch = useDispatch();
  // 보통 관리하는 state가 많기 때문에 state 통에서 state.number 등으로 특정 상태만 가져옴
  console.log(number);
  return (
    <>
      <h2>redux를 사용해 store에서 관리되는 state 가져오고, 사용하기</h2>
      <h3>{number}</h3>
      <button onClick={() => dispatch({ type: "increment" })}>더하기</button>
      <button onClick={() => dispatch({ type: "decrement" })}>빼기</button>
      <button onClick={() => dispatch({ type: "reset" })}>초기화</button>
    </>
  );
}

export default Counter;
