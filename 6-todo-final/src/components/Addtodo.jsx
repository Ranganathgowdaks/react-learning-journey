import { useState } from "react";
function Addtodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm-5">
          <input
            type="text"
            placeholder="enter todo list"
            className="input-main"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-sm-3">
          <input type="date" onChange={handleDateChange} value={dueDate} />
        </div>
        <div className="col-sm-1 ">
          <button
            type="button"
            className="btn btn-success button-rg"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
