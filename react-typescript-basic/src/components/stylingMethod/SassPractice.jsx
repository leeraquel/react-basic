import "./scssPractice.scss";
import "./main.scss";
import "./sub.scss";

export default function SassPractice() {
  return (
    <>
      <div className="test"> Sass 도전 </div>
      <div className="header"> 글로벌 사용해보기 </div>
      <br />
      <div className="success-message">성공입니다.</div>
      <br />
      <div className="error-message">실패입니다.</div>
      <div className="container">
        <div>첫째</div>
        <div>둘째</div>
        <div>셋째</div>
      </div>
      <div className="sass-for-container">
        <div>첫째</div>
        <div>둘째</div>
        <div>셋째</div>
      </div>
      <div className="sass-if-container">이프문을 씁니다</div>
    </>
  );
}
