import React from "react";
import TodoList from "../Components/todolist";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as todoActions from "../actions/todo";
import { Spinner , Alert} from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
//import Item from "./Item";
//axios.default.baseURL ="http://localhost:9000/db/todo"

class Todo extends React.Component {
  state = {
    title: "",
    startDate: new Date(),
  };
  
  componentDidMount() { 
  this.props.actions.getTodo()
    //this.setState({ loading: true });
    //this.props.actions.loadingTodo(requestObj)
   /* setTimeout(() => { 
      axios
        .get("http://localhost:9000/db/todo")
        .then((response) => {
          this.props.actions.setTodos(response.data);
          //this.setState({ loading: false });
        })
        .catch((error) => {
          this.setState({loading:false, error: true });
          console.log(error);
        });
    }, 1000);*/
  }
  serverResponse = () => {
    this.componentDidMount()
  }
  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };
  onChange = (e) => {
    this.setState({ title: e.target.value });
  };
 errorClick =(e) =>{
  this.setState({ loading: true , error:false });
  this.serverResponse()
 }
  onSubmit = (a) => {
    a.preventDefault();
    /*this.props.actions.addTodo(
      this.state.text,
      this.state.startDate.toDateString()
    );
    this.setState({ text: "" });*/
    let requestObj = {
      title: this.state.title,
      date: this.state.startDate.toDateString(),
    };
    axios
      .post("http://localhost:9000/db/todo", requestObj)
      .then((response) => {
        this.props.actions.addTodo(
          // this.state.text,
          //this.state.startDate.toDateString()
          response.data,
        );
        this.setState({ title: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteTodo = (id) => {
    axios
      .delete("http://localhost:9000/db/todo/" + id)
      .then((response) => {
        this.props.actions.removeTodo(id);
        //console.log("d", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  editTodo = (id, title, date , completed, text) => {
    let requestObj = {
      text: text,
      title: title,
      date: date.toDateString(),
      completed : completed,
    };
    axios
      .put("http://localhost:9000/db/todo/" + id, requestObj)
      .then((response) => {
        this.props.actions.editTodo(id, response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  completeTodo = (id, todoItem) => {
    axios
      .put("http://localhost:9000/db/todo/" + id, todoItem)
      .then((response) => {
        this.props.actions.completeTodo(id, response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* setIsCompleted = (itemId, isCompleted) => {
    this.props.actions.completeTodo(this.state.id, this.state.isCompleted);
  };
*/
  updateSnoozeStatus = (itemId, isSnoozeOn) => {
    let items = this.state.items;
    let newItems = [];
    for (var item of items) {
      if (item.id === itemId) {
        item.isSnoozeOn = isSnoozeOn;

      }
      newItems.push(item);
    }
    this.setState({ items: newItems });
  };
  

  render() {
 //console.log(this.state.title)
    return (
      <div>
        <h4 className="text-center m-4">TODO</h4>
        
        <form
          onSubmit={this.onSubmit}
          style={{ backgroundColor: "transparent" }}
          className="d-flex justify-content-center jumbotron"
        >
          <input
            type="textbox"
            value={this.state.title}
            onChange={this.onChange}
            className="mr-4 p-2"
          ></input>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            className="p-2 "
          />
          <button type="submit" className="btn btn-primary ml-4 p-2">
            Add {/*{this.state.items.length + 1}*/}
          </button>
        </form>
        {this.props.todo.loading && (
          <Spinner
            animation="border"
            role="status"
            style={{ marginLeft: "47%" }}
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {this.props.todo.error && (
          <Alert  variant='danger'  className="d-flex justify-content-center jumbotron" >
         <h4> Error in Loading data</h4> <button className="btn btn-danger ml-4" onClick={this.errorClick}>Retry</button>
        </Alert>
        )}

        <div className=" container text-center checkbox list-group pl-4">
          <TodoList
            //items={this.props.todo}
            items={this.props.todo.items}
            onChange={this.onChange}
            handleChange={this.handleChange}
            updateTodo={this.props.actions.updateTODO}
            dateChange={this.props.actions.dateChange}
            // completeTodo={this.props.actions.completeTodo}
            completeTodo={this.completeTodo}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            // editTodo={this.props.actions.editTodo}
            remainderTodo={this.props.actions.remainderTodo}
            updateSnoozeStatus={this.updateSnoozeStatus}
            history={this.props.history}
          />
         
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ todo }) => ({
  todo,
});

/*const mapStateToPropss = (state) => ({
  todo : state.todo,
});

const mapStateToProps2s = (state) => {
  return {
    todo : state.todo,
  }
};*/

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);

//export default Todo;
