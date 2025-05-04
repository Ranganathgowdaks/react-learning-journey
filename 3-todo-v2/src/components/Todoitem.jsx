const Todoitem = ({ todoName, todoDate }) => {
  return (
    <div className="container">
      <div className="row input-row">
        <div className="col-sm-5">{todoName}</div>
        <div className="col-sm-3">{todoDate}</div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-danger button-rg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todoitem;
