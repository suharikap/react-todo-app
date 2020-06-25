
import React from "react";
import TodoList from "../Components/todolist";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as todoActions from "../actions/todo"

class Todo extends React.Component {
  state = {
    items: [
      {
        id: "",
        text: "Hello",
        date: "Fri Jun 04 2020",
        isCompleted: false,
        isReminderOn: false,
        isSnoozeOn: false,
      },
    ],
    text: "",
    startDate: new Date(),
  };

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
    const newItem = {
      text: this.state.text,
      date: this.state.startDate.toDateString(),
      id: Date.now(),
      isCompleted: false,
      isRemainder: false,
      isSnoozeOn: false,
    };

   
     this.setState((e) => ({
    items: e.items.concat(newItem),
       text: "",
     }));
  };

  setIsCompleted = (itemId, isCompleted) => {
    let items = this.state.items;

    let newItems = [];

    //loop and set s
    for (var item of items) {
      if (item.id === itemId) {
        item.isCompleted = isCompleted;
      }
      newItems.push(item);
    }

    this.setState({ items: newItems });
  };

  updateReminderStatus = (itemId, isReminderOn) => {
    let items = this.state.items;
    let newItems = [];
    for (var item of items) {
      if (item.id === itemId) {
        item.isReminderOn = isReminderOn;
      }
      newItems.push(item);
    }

    this.setState({ items: newItems });
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
            items={this.props.items}
            setIsCompleted={this.setIsCompleted}
            updateReminderStatus={this.updateReminderStatus}
            updateSnoozeStatus={this.updateSnoozeStatus}
          />
        </div>
      </div>
    );
  }
}


export default Todo;
