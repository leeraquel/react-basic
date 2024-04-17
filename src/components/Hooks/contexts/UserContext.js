import { createContext } from "react";

// 초기 상태값 설정
const defaultState = {
  name: "", // 기본적으로 이름은 빈 문자열
  setName: () => {}, // 기본적으로는 아무 동작도 하지 않는 함수
};

// UserContext 생성 및 기본값 설정
export const UserContext = createContext(defaultState);
