import { createContext } from "react";

const defaultState = {
  age: 0,
  setAge: () => {},
};

export const AgeContext = createContext();
