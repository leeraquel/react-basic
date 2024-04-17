import { useEffect } from "react";

export default function UseTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => (document.title = prevTitle);
  }, [title]);
}

//title 매개변수를 받아서
// 새로운 컴포넌트가 mount되고 해당 컴포넌트에서 useTitle hook을 호출하는 동시에 변경하고자 하는 title을 매개변수로 전달받아서 해당 title로 document.title의 컨텐트를 바꿔줌
