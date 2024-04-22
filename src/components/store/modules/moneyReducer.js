const initialState = 0;

export const moneyMinus = (amount) => ({
  type: "money/decrement",
  payload: amount,
});

export const moneyPlus = (amount) => ({
  type: "money/increment",
  payload: amount,
});

export const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "money/increment":
      return state + action.payload;
    case "money/decrement":
      return state - action.payload;
    default:
      return state;
  }
};
