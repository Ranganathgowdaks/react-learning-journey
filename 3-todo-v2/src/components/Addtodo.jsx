function Addtodo() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-sm-5">
          <input
            type="text"
            placeholder="enter todo list"
            className="input-main"
          />
        </div>
        <div className="col-sm-3">
          <input type="date" />
        </div>
        <div className="col-sm-1 ">
          <button type="button" className="btn btn-success button-rg">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
