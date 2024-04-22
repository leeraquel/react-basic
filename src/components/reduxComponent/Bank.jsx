import { useDispatch, useSelector } from "react-redux";
import { moneyMinus, moneyPlus } from "../store/modules/moneyReducer";
import { useState } from "react";

export default function Bank() {
  const money = useSelector((state) => state.money);
  const dispatch = useDispatch();

  const [inputNum, setInputNum] = useState(0);

  return (
    <>
      <h2>Bank State Redux</h2>
      <div>잔고 : {money}</div>
      <input
        type="number"
        value={inputNum}
        onChange={(e) =>
          e.target.value !== "" ? setInputNum(parseInt(e.target.value)) : 0
        }
      />
      <button
        onClick={() => {
          dispatch(moneyPlus(inputNum));
        }}
      >
        입금
      </button>
      <button
        onClick={() => {
          dispatch(moneyMinus(inputNum));
        }}
      >
        출금
      </button>
    </>
  );
}
