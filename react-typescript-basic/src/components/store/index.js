// 여러 개의 리듀서를 하나로 묶어줌
import { combineReducers } from "@reduxjs/toolkit";
// import { countReducer } from "./modules/countReducer";
import { isLoggedInReducer } from "./modules/loginReducer";
import { moneyReducer } from "./modules/moneyReducer";
import countSlice from "./slice/countSlice";

const rootReducer = combineReducers({
  count: countSlice.reducer,
  isLoggedIn: isLoggedInReducer,
  money: moneyReducer,
});
export default rootReducer;
