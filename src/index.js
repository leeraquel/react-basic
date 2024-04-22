import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import rootReducer from "./components/store";

// 1. 초기 사용법 숙지하기
// function reducer(state = 0, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return 0;
//     default:
//       return state;
//   }
// }
// //객체 구조분해 할당
// let store = configureStore({ reducer });

// 2. redux effective structure, multiple state management, separate code
// reducer 따로 만들기, store 관리하는 폴더 따로 만들기
// src/store/index.js : 스토어의 전체 상태 관리 및 하나로 통합
// src/store/module/countReducer.js & src/store/module/isLoggedinReducer.js
// 각각의 state를 관리하는 reducer 파일
// store 생성
const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
