import { useContext } from "react";
import { ThemeContext } from "../Hooks/contexts/ThemeContext";

export default function Box() {
  // context api를 사용해서 전역적으로 접근할 수 있는 context에 접근하겠다. 라는 뜻 !
  // useContext의 parameter는 작성되었는 constext 중 theme에 접근하겠다는 뜻
  const { isDark, setIsDark } = useContext(ThemeContext);

  function handleClick() {
    setIsDark(!isDark);
  }

  return (
    <>
      <h2> ThemeContext 사용</h2>
      <button onClick={handleClick}>테마 변경</button>
      <div style={isDark ? { backgroundColor: "black", color: "white" } : {}}>
        Theme : {isDark ? "다크 모드" : "라이트 모드"}
      </div>
      {/* 인라인 스타일 작성시 삼항연산자에서 빈 객체 안 넣어주면 오류 발생  */}
    </>
  );
}
