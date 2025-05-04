import "./App.css";
function App() {
  return (
    <center class="todo-container">
      <h1>ToDo App</h1>
      <div class="container ">
        <div class="row">
          <div class="col-sm-5">
            <input
              type="text"
              placeholder="enter todo list"
              className="input-main"
            />
          </div>
          <div class="col-sm-3">
            <input type="date" />
          </div>
          <div class="col-sm-1 ">
            <button type="button" class="btn btn-success button-rg">
              Add
            </button>
          </div>
        </div>
        <div class="row input-row">
          <div class="col-sm-5">drink juice</div>
          <div class="col-sm-3">14-12-24</div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger button-rg">
              Delete
            </button>
          </div>
        </div>
        <div class="row input-row">
          <div class="col-sm-5">go to gym</div>
          <div class="col-sm-3">14-12-24</div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger button-rg">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
