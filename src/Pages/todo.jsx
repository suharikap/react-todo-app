import React from "react";
import TodoList from "../Components/todolist";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as todoActions from "../actions/todo";
//import { date } from "yup";
//import axios from 'axios';
//axios.default.baseURL ="http://localhost:9000/db/todo"
//import { response } from "express";

class Todo extends React.Component {
  state = {
    items: [
      {
        isEditable: false,
      },
    ],
    text: "",
    startDate: new Date(),
  };
  
  /*componentDidMount() {
    //axios.get('http://localhost:9000/db/todo')
        //.then(res=>this.setState({todos:res.data}))
        //.then(console.log("hiii"))
        
      axios.get('')
      .then(response=>{
        console.log(response.data)
      })
      .catch(error=>{
        console.log('error')
      });
      
   }*/
   componentDidMount() {
    fetch('http://localhost:9000/db/todo')
    .then(res => res.json())
    .then((items) => {
      this.setState({ items: items })
      console.log("items" , items);

    })
    .catch(console.log("error"))
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (a) => {
    a.preventDefault();

    this.props.actions.addTodo(
      this.state.text,
      this.state.startDate.toDateString()
    );
    this.setState({ text: "" });
  };

  setIsCompleted = (itemId, isCompleted) => {
    this.props.actions.completeTodo(this.state.id, this.state.isCompleted);
  };


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
    console.log("todo props is ", this.props);
    //console.log("onchange ", this.onChange)
    console.log("this", this.props.todo);
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
            value={this.state.text}
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
        <div className=" container text-center checkbox list-group pl-4">
          <TodoList
            items={this.props.todo}
            onChange={this.onChange}
            handleChange={this.handleChange}
            updateTodo={this.props.actions.updateTODO}
            dateChange={this.props.actions.dateChange}
            completeTodo={this.props.actions.completeTodo}
            removeTodo={this.props.actions.removeTodo}
            editTodo={this.props.actions.editTodo}
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
