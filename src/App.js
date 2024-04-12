import "./App.css";
import BasicEvent from "./components/eventHandle/BasicEvent";
import ClickCounter from "./components/eventHandle/EventBindClass";
function App() {
  return (
    <div className="App">
      <BasicEvent></BasicEvent>
      <ClickCounter></ClickCounter>
    </div>
  );
}

export default App;
