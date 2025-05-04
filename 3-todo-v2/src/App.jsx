import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy milk",
      duedate: "08-02-2025",
    },
    {
      name: "Go to college",
      duedate: "10-03-2025",
    },
  ];
  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo></Addtodo>
      <Todoitems todoItems={todoItems}></Todoitems>
    </center>
  );
}

export default App;
