// true flase로 관리되는 isLoggedin state

const initialState = false;

export const isLoggedInChange = () => ({ type: "isloggedIn/change" });

// isLoggedInReducer 수정
export const isLoggedInReducer = (state = initialState, action) => {
  switch (action.type) {
    case "isLoggedIn/change":
      return !state; // 상태 반전
    default:
      return state; // 기본적으로 현재 상태 반환
  }
};
