import React from "react";
import DatePicker from "react-datepicker";
//import Item from "./Item"
//import { render } from "@testing-library/react";

//const TodoItem = (props) => {
class TodoItem extends React.Component {
  state = {
    startDate: new Date(),
    text: this.props.item.text,
  };
  handleChange = (date, e) => {
    e.stopPropagation();
    this.setState({
      startDate: date,
    });
  };
  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleClick = (e) => {
    if (this.props.isFullView !== true && !this.props.item.isEditable) {
      this.props.history.push("/item/" + this.props.item.id);
    }
    //const url = 'http://localhost:3000/item/'+ this.props.item.id;
    //window.location.href=url
  };
  render() {
    const mystyle = {
      //cursor:'pointer'
    };
    //const input1 = React.createRef();
    //const props = this.props;
    console.log("this3", this.props.item);
    console.log("view", this.props.isFullView);
    console.log("view", this.props.item.isEditable);
    let today = Date.now();
    let itemDate = Date.parse(this.props.item.date);
    let isPast = false;
    if (itemDate > today) {
      isPast = true;
    }

    return (
      <div
        className=" container text-center checkbox list-group"
        style={{ mystyle }}
        onClick={this.handleClick}
      >
        {this.props.item.isEditable ? (
          <li className="list-group-item" key={this.props.item.id}>
            <input
              type="checkbox"
              className="float-left  m-2"
              defaultChecked={this.props.item.isCompleted}
              onChange={(e) => {
                //e.stopPropagation();
                this.props.completeTodo(this.props.item.id, {
                  ...this.props.item,
                  isCompleted: e.target.checked,
                });
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            ></input>

            <input
              type="textbox"
              className="float-left ml-3 "
              //ref={input1}
              value={this.state.text}
              onChange={this.onChange}
              // onClick={(e) => {
              // e.stopPropagation();
              //}}
              //value={this.props.item.text}
              
            ></input>

            <button
              className="float-right"
              onClick={(e) => {
                e.stopPropagation();
                this.props.editTodo(
                  this.props.item.id,
                  { ...this.props.item, isReminderOn: e.target.checked },
                  (this.props.item.text = this.state.text),
                  (this.props.item.date = this.state.startDate.toDateString())
                );
              }}
            >
              Save
            </button>

            {isPast ? (
              <span className="text-success float-right">
                {/*<i onClick={() =>props.updateReminderStatus(props.item.id,!props.item.isReminderOn)*/}
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                />
              </span>
            ) : (
              <span className=" text-danger float-right ">
                {/*<i onClick={() =>props.updateReminderStatus(props.item.id,!props.item.isReminderOn)*/}
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"

                  //className="p-2 "
                />
              </span>
            )}
          </li>
        ) : (
          <li className="list-group-item" key={this.props.item.id}>
            <input
              type="checkbox"
              className="float-left m-1 "
              defaultChecked={this.props.item.isCompleted}
              onChange={(e) => {
                // e.stopPropagation();
                this.props.completeTodo(this.props.item.id, {
                  ...this.props.item,
                  isCompleted: e.target.checked,
                });
              }}
              ///onClick={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
              }}
            ></input>

            <span className="float-left pl-3 ">{this.props.item.text} </span>
            {/*<span className="float-left pl-3 ">{this.state.text} </span>*/}
            <i
              className="fa fa-pencil-square-o float-right  pl-2 pt-1"
              onClick={(e) => {
                e.stopPropagation();
                //e.stopPropagation();
                this.props.editTodo(this.props.item.id, {
                  ...this.props.item,
                  isReminderOn: e.target.checked,
                });
              }}
            ></i>

            {isPast ? (
              <span className="text-success float-right">
                <i
                  onClick={(e) => {
                    e.stopPropagation();
                    this.props.remainderTodo(this.props.item.id, {
                      ...this.props.item,
                      isReminderOn: e.target.checked,
                    });
                  }}
                  className="pr-2"
                >
                  {this.props.item.isReminderOn ? (
                    <i className="fa fa-bell" style={{ color: "red" }}></i>
                  ) : (
                    <i className="fa fa-bell" style={{ color: "black" }}></i>
                  )}
                </i>
                {this.props.item.date}
                <i
                  class="fa fa-trash pl-2"
                  style={{ color: "black" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.props.removeTodo(this.props.item.id);
                  }}
                ></i>
              </span>
            ) : (
              <span className=" text-danger float-right ">
                <i
                  onClick={(e) => {
                    e.stopPropagation();
                    this.props.remainderTodo(this.props.item.id, {
                      ...this.props.item,
                      isReminderOn: e.target.checked,
                    });
                  }}
                  className="pr-2"
                >
                  {this.props.item.isReminderOn ? (
                    <i className="fa fa-bell" style={{ color: "red" }}></i>
                  ) : (
                    <i className="fa fa-bell" style={{ color: "black" }}></i>
                  )}
                </i>
                {this.props.item.date}
                <i
                  className="fa fa-trash pl-2"
                  style={{ color: "black" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    this.props.removeTodo(this.props.item.id);
                  }}
                ></i>
              </span>
            )}
          </li>
        )}
      </div>
    );
  }
}

export default TodoItem;
