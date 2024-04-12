import { useState } from "react";

function FunctionState() {
  let melon = "melon";
  const [fruits, setFruits] = useState("사과");
  const [num, setNum] = useState(0);
  const [apple, setApple] = useState("apple");
  const [isEng, setIsEng] = useState(true);
  const [appleTitle, setAppleTitle] = useState("한글");
  const [number, setNumber] = useState(0);

  function onClick() {
    //setter는 비동기 동작이기 때문에 console찍으면 안나올 수 잇음.
    setFruits("apple");
    console.log(fruits);
  }

  function handleMelon() {
    melon = "멜론";
    document.querySelector(".melon").textContent = melon;
    console.log(melon);
  }

  function handleNum() {
    // setNum(num + 1)
    // alert(num)
    // alert에 변경 전 num이 찍힘.
    // state 훅의 setter함수는 비동기적으로 동작함, 따라서 num state가 1 더한 값으로 업데이트 되기 전 alert이 먼저 실행됨
    // 따라서 이를 해결하기 위해 setter 함수에 파라미터로 업데이트할 값이 아닌 callback을 전달
    // 해당 콜백의 파라미터로는 원래 state값이고 원래 state 값에 1일 더하는 로직을 작성
    // setNumber((prevNum) => prevNum + 1)

    setNum((prevNum) => {
      alert(prevNum + 1);
      return prevNum + 1;
    });
    //setter 함수에 인자로 콜백함수를 넘겨주는 거임. 함수를 통으로 셋팅해서 실행되는것
  }

  function handleApple() {
    setApple((prevApp) => {
      if (prevApp === "apple") {
        return "사과";
      } else return "apple";
    });
  }

  function handleIsApple() {
    isEng ? setAppleTitle("ENG") : setAppleTitle("한글");
    isEng ? setApple("사과") : setApple("apple");
    setIsEng((prev) => {
      return !prev;
    });
  }

  function handlePluseTwo() {
    setNumber((prev) => {
      return prev + 2;
    });
  }

  function handleMinusOne() {
    setNumber((prev) => {
      if (prev <= 0) {
        alert("0보다 작을 수 없습니다.");
        return prev;
      } else return prev - 1;
    });
  }

  return (
    <>
      <h2>Function State로 값 변경하기</h2>
      <button onClick={onClick}> 영어로 바꾸기 </button>
      <p>{fruits}</p>
      <p className="melon">{melon}</p>
      <button onClick={handleMelon}>멜론 바꾸기 </button>
      <p>{num}</p>
      <button onClick={handleNum}>숫자 키우기</button>
      <br />
      <button onClick={handleApple}>사과 or apple로 바꾸기</button>
      <p>{apple}</p>
      <p>boolean으로 구현하기</p>
      <button onClick={handleIsApple}>{appleTitle}로 바꾸기</button>
      <p>{apple}</p>

      <button onClick={handlePluseTwo}> + 2 </button>
      <button onClick={handleMinusOne}> - 1 </button>
      <div style={{ display: "flex" }}>
        <div style={{ fontSize: "60px" }}>{number < 8 ? "😃" : "😭"}</div>
        <div style={{ fontSize: "60px" }}>{number}</div>
      </div>
    </>
  );
}

export default FunctionState;
