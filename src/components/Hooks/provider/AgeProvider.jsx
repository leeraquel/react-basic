import { useState } from "react";
import { AgeContext } from "../contexts/AgeContext";

export default function AgeProvider({ children }) {
  const [age, setAge] = useState(0);

  return (
    <AgeContext.Provider value={{ age, setAge }}>
      {children}
    </AgeContext.Provider>
  );
}
