import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../store/slice/countSlice";

export default function UseToolkit() {
  const count = useSelector((state) => state.count.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>툴킷 사용하기</h2>
      <div>count : {count}</div>
      <button onClick={() => dispatch(increment())}>증가</button>
      <button onClick={() => dispatch(decrement())}>감소</button>
    </>
  );
}
