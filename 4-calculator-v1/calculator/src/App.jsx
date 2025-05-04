import "./App.css";
import Display from "./components/Display";
import Buttonscontainer from "./components/Buttons";
import Appname from "./components/Appname";

function App() {
  return (
    <center>
      <div className="calculator">
        <Display></Display>
        <Buttonscontainer></Buttonscontainer>
      </div>
    </center>
  );
}

export default App;
