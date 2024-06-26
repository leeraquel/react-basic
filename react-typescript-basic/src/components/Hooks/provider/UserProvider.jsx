import { UserContext } from "../contexts/UserContext";
import { useState } from "react";

export default function UserProvider(props) {
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {props.children}
    </UserContext.Provider>
  );
}
