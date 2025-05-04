import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import EmptyMessage from "./components/Emptymessage";
import { useState } from "react";

import "./App.css";
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added:${itemName} date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo onNewItem={handleNewItem}></Addtodo>
      {todoItems.length == 0 && <EmptyMessage></EmptyMessage>}
      <Todoitems
        todoItems={todoItems}
        onDeleteItems={handleDeleteItem}
      ></Todoitems>
    </center>
  );
}

export default App;
