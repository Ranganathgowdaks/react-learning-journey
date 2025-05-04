import Todoitem from "./Todoitem";
const Todoitems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <Todoitem todoName={item.name} todoDate={item.duedate}></Todoitem>
      ))}
    </div>
  );
};
export default Todoitems;
