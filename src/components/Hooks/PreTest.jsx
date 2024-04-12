import { useState } from "react";

export default function PreTest() {
  const [data, setData] = useState([
    { id: 1, user: "장원영", email: "wonyoung@gmail.com" },
    { id: 2, user: "안유진", email: "yujin@gmail.com" },
  ]);

  const [inputUser, setInputUser] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [nextId, setNextId] = useState(data.length + 1); // useState(3)

  const onChangeUser = (e) => setInputUser(e.target.value);
  const onChangeEmail = (e) => setInputEmail(e.target.value);
  const eventClick = () => {
    // 새로운 데이터를 기존 데이터 배열에 추가
    // 참고) concat(): https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
    // const nextData = data.concat({
    //   id: nextId,
    //   user: inputUser,
    //   email: inputEmail,
    // });

    // 또는
    const nextData = [
      ...data,
      {
        id: nextId,
        user: inputUser,
        email: inputEmail,
      },
    ];

    setNextId(nextId + 1);
    setData(nextData);
    setInputUser("");
    setInputEmail("");
  };

  const onKeyDownEnter = (e) => {
    if (e.key === "Enter") {
      eventClick();
    }
  };

  const onRemoveData = (id) => {
    const NextData = data.filter((data) => data.id !== id);
    setData(NextData);
  };

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
      />

      <input
        type="text"
        name="email"
        placeholder="이메일"
        value={inputEmail}
        onChange={onChangeEmail}
        onKeyDown={onKeyDownEnter}
      />

      <button onClick={eventClick}>등록</button>

      <div>{dataList}</div>
    </div>
  );
}
