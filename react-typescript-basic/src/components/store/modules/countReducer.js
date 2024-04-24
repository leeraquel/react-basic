// initial state
const initialState = 0;

// action type
// {type : "decrement"}
// {type : "increment"}
// 이렇게 선언하던 거 여기서 한 번에 선언할 거임

// counterMinus 호출하면 return 값으로 객체 반환
export const counterMinus = () => ({ type: "count/decrement" });
export const counterPlus = () => ({ type: "count/increment" });
export const counterReset = () => ({ type: "count/reset" });
// dispatch(counterMinus()) == dispatch({type : 'decrement'})
export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "count/increment":
      return state + 1;
    case "count/decrement":
      return state - 1;
    case "count/reset":
      return 0;
    default:
      return state;
  }
};
