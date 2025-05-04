import "./App.css";
import Display from "./components/Display";
import Buttonscontainer from "./components/Buttons";
import Appname from "./components/Appname";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <center>
      <div className="calculator">
        <Display displayValue={calVal}></Display>
        <Buttonscontainer onButtonClick={onButtonClick}></Buttonscontainer>
      </div>
    </center>
  );
}

export default App;
