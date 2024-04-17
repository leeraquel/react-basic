import "./App.css";
import PreTest from "./components/Hooks/PreTest";
import CustomHook from "./components/Hooks/CustomHook";
import { useState } from "react";
import { ThemeContext } from "./components/Hooks/contexts/ThemeContext";
import Box from "./components/atoms/Box.jsx";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      <PreTest></PreTest>
      <CustomHook></CustomHook>
      <h1>contextAPI</h1>
      <h3>전역적으로 접근할 수 있는 값이 있을 때 접근을 쉽게 하기 위해 사용</h3>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {/* 이 내부에 작성된 컴포넌트만 ThemeContext가 관리하는 값에 접근할 수 있음 */}
        {/* 테마 컨텍스트 안에있는 프로바이터 컴포넌트로 감싸주는 거임. */}
        <Box></Box>
      </ThemeContext.Provider>
      {/* 프로바이더 사용 없이 Box를 렌더링할 경우 컴파일 오류 발생
      isDark 사용하는 곳부터 에러 발생
      context api 사용해서 전역적으로 관리하는 값에 접근하는 컴포넌트는 재사용성이 떨어짐
      재사용성이 떨어짐 -> context api 사용하기 전 해당 사항 고려 필요 */}
    </div>
  );
}

export default App;
