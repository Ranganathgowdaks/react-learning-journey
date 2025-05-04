//fragments
//map
//conditional rendering
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  let fooditems = ["Dal", "egg", "ghee", "milk", "green vegetables"];
  // let fooditems = [];
  let emptyMessag = fooditems.length == 0 ? <h3>i am still hungry</h3> : null;
  return (
    <>
      <h1>Healthy foods</h1>;{emptyMessag}
      <ul className="list-group">
        {fooditems.map((item) => {
          return (
            <li key={item} className="list-group-item">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default App;
