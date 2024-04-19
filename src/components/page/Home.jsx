import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
  const [queryParams, setQueryParams] = useSearchParams();
  const [isDark, setIsDark] = useState(false);

  console.log(queryParams.get("mode"));
  console.log(queryParams);

  const toggleMode = () => {
    setQueryParams(isDark ? {} : { mode: "dark" });
    setIsDark(!isDark);
  };
  return (
    <>
      <h1 style={isDark ? { backgroundColor: "black", color: "#fff" } : {}}>
        홈 페이지
      </h1>
      <button onClick={toggleMode}>{isDark ? "라이트모드" : "다크모드"}</button>
    </>
  );
}
