import Todoitem from "./Todoitem";
const Todoitems = ({ todoItems, onDeleteItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <Todoitem
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteItems}
        ></Todoitem>
      ))}
    </div>
  );
};
export default Todoitems;
