import { useState } from "react";

export default function BasicEvent() {
  const [msg, setMsg] = useState("힘내세요!💪");
  const [userName, setUserName] = useState("기본값");

  const msgToEng = () => {
    setMsg("fighting!🔥");
  };

  const msgToKor = () => {
    setMsg("힘내세요!💪");
  };

  const alertMsg = (msg) => {
    alert(msg);
  };

  //input에 변경사항 발생 시 해당 input의 value를 dom에 출력

  return (
    <>
      <h2>함수형 컴포넌트 event handling</h2>
      <div>{msg}</div>
      {/* 클릭 이벤트 발생 시 실행할 함수 자체를 onClick에 전달 -> 함수 호출 X */}
      <button onClick={msgToEng}>fighting!🔥</button>
      <button onClick={msgToKor}>힘내세요!💪</button>

      <br />

      {/* 함수에 매개변수를 전달하는 경우 */}
      {/* 방법 1. */}
      {/* onClick에서 익명 함수를 선언하고, 그 내부에 함수를 실행시킴 */}
      {/* 익명 함수 자체를 전달하는 것이 됨 -> alertMsg 함수 자체를 호출한 것이 X */}
      <button onClick={() => alertMsg("오늘은 금요일이잖아요😊")}>
        메세지 alert창에 띄우기
      </button>

      {/* 방법 2. */}
      {/* bind 메서드 사용 */}
      <button onClick={alertMsg.bind(null, "끝까지 불태워 봅시다아아!!!👊")}>
        메세지 alert창에 띄우기2
      </button>

      <br></br>
      <br></br>
      <input
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        // e 는 브라우저의 native 이벤트 객체가 아닌 react의 synthetic event object
        type="text"
        name="userName"
      />
      <h3>{userName}</h3>
    </>
  );
}
