import { useState } from "react";
import { Link } from "react-router-dom";

export default function PreTest() {
  // 서버에서 받아온 기존 데이터 배열을 useState로 상태 관리함
  // 객체로 이루어진 배열로 객체마다 id, user, email 정보를 포함하고 있음.
  const [data, setData] = useState([
    { id: 1, user: "장원영", email: "wonyoung@gmail.com" },
    { id: 2, user: "안유진", email: "yujin@gmail.com" },
  ]);

  // 사용자의 입력값을 관리하는 state, input value 값을 저장
  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  // iddml 초기 값으로 data의 마지막 인덱스 값에 + 1을 하여 다음 id 값 가지고 있음.
  const [nextId, setNextId] = useState(data.length + 1); // useState(3)

  // 사용자의 이름을 받는 input에 변경 사항이 있을 때 실행되는 함수
  // user input에 on change가 일어나면 그 value 값으로 userState update
  const onChangeUser = (e) => setInputUser(e.target.value);

  // email input 변경 값을 state update
  const onChangeEmail = (e) => setInputEmail(e.target.value);

  // 추가 버튼 클릭 시 호출되는 함수 nextData 배열에 사용자 입력 정보 추가
  const eventClick = () => {
    // 새로운 데이터를 기존 데이터 배열에 추가
    // 참고) concat(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // const nextData = data.concat({
    //   id: nextId,
    //   user: inputUser,
    //   email: inputEmail,
    // });

    // 또는

    //nextData 변수를 선언하여 기존 data를 spread 연산자로 복사하여 가져온 뒤,
    // 배열의 마지막에 새로운 data의 값을 추가함.
    const nextData = [
      ...data,
      {
        id: nextId,
        user: inputUser,
        email: inputEmail,
      },
    ];
    // 해당 id 값은 데이터에 추가 되었으므로, 다음 데이터가 추가될 경우 위해 id + 1 해서 새 id값 할당
    setNextId(nextId + 1);
    // 사용자 입력값이 추가된 next data를 setData state에 넣어 데이터 갱신
    // 상태 관리 중이던 데이터에 변경사항이 생겼으므로 컴포넌트가 리렌더링 일어나고 datalist 갱신된 형태로 나옴
    setData(nextData);
    // 사용자 정보가 추가됐으므로 input 창 초기화
    setInputUser("");
    setInputEmail("");
  };

  // 클릭뿐만 아니라 엔터키 눌렀을 때도 추가 동작 하기 위해 eventClick 함수 호출
  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      eventClick();
    }
  };

  // filter 함수는 해당 조건에 true를 가지는 데이터만 모아서 배열로 반환함
  // 이 속성을 이용하여 id값이 일치하지 않는 객체만 배열로 다시 뱉어서
  // 이 값을 setData에 넣어 상태 업데이트
  // 리랜더링 일어나고 datalist가 업데이트 적용된 상태로 렌더링됨.
  const onRemoveData = (id) => {
    const NextData = data.filter((data) => data.id !== id);
    setData(NextData);
  };

  // datalist는 jsx tag를 반환함
  // data 배열을 순회하면서 data 객체의 id와 email을 화면에 출력하고 key 값으로 id를 가짐
  // 더블클릭 시 onRemoveData를 호출하여 해당 태그의 id 값을 기준으로 조회하여 불일치 값만 data로 가짐
  const dataList = data.map((data) => (
    <h2 key={data.id} onDoubleClick={() => onRemoveData(data.id)}>
      {data.user}: {data.email}
    </h2>
  ));

  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="이름"
        value={inputUser}
        onChange={onChangeUser}
        // 변경사항 발생시 value를 inputUser의 값으로 넣고 이 값을 다시 input의 value로 넣음
        // 순서가 변경 발생 -> 발생한 event.target.value를 state에 저장 -> input value에 state 값 넣음
      />

      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
        // user와 동일 로직이나, 폼의 마지막 인풋으로 엔터키에 submit 기능 추가
      />

      {/* 버튼 클릭 시 eventClick 함수 호출 */}
      <button onClick={eventClick}>등록</button>

      {/* h2태그 배열  */}
      <div>{dataList}</div>
      <Link to={`/pretest/${nextId}`}> 상세보기 </Link>
    </div>
  );
}
