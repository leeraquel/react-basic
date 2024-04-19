import { useContext, useRef } from "react";
import { AgeContext } from "../Hooks/contexts/AgeContext";
import { UserContext } from "../Hooks/contexts/UserContext";

export default function Profile() {
  // AgeContext의 age와 setAge
  // UserContext의 name과 setName 모두 사용 예정
  const { age, setAge } = useContext(AgeContext);
  const { name, setName } = useContext(UserContext);

  const ageRef = useRef();
  const nameRef = useRef();

  function changeInfo() {
    if (
      nameRef.current.value.length < 1 ||
      nameRef.current.value.trim() === ""
    ) {
      alert("이름을 다시 입력해주세요");
      nameRef.current.focus();
      nameRef.current.value = "";
      return;
    } else if (
      ageRef.current.value.length === 0 ||
      ageRef.current.value.trim() === "" ||
      Number(ageRef.current.value) < 1
    ) {
      alert("나이를 다시 입력해주세요");
      ageRef.current.focus();
      ageRef.current.value = "";

      return;
    }
    setAge(Number(ageRef.current.value));
    setName(nameRef.current.value);
  }
  return (
    <>
      <h3>유저 프로필</h3>
      <div> 나이 : {age}</div>
      <div> 이름 : {name}</div>
      <input type="text" pattern="이름을 입력하세요" ref={nameRef}></input>
      <input type="number" placeholder="나이를 입력하세요" ref={ageRef}></input>
      <button onClick={changeInfo}>프로필 변경</button>
    </>
  );
}
