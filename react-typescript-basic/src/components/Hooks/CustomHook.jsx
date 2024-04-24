import { useState } from "react";
import useTitle from "./customHooks/useTitle";

export default function CustomHook() {
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("초기 타이틀");

  useTitle(title); // useTitle 훅을 사용하여 title 상태에 따라 문서의 제목을 업데이트합니다.

  function handleClick() {
    setShowModal(!showModal); // showModal 상태를 토글합니다.
    setTitle(showModal ? "초기 타이틀" : "커스텀 훅 배우기"); // showModal 상태에 따라 title을 변경합니다.
  }

  return (
    <>
      <button onClick={handleClick}>타이틀 변경하기</button>
      {showModal ? <h2>타이틀 변경</h2> : ""}
    </>
  );
}
