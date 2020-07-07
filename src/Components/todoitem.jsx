import React, { useState } from "react";
import DatePicker from "react-datepicker";

const TodoItem = (props) => {
  const [title , setTitle] = useState(props.item.title)
  const [isEditable, setEditable] = useState(false)
  const [startDate , setDate] = useState(new Date(props.item.date))

/*class TodoItem extends React.Component {
  state = {
    text: this.props.item.text,
    isEditable: false,
    startDate: Date.parse(this.props.item.date),
  };*/
 //handleChange = (date, e) => {
  function handleChange(date, e){
    e.stopPropagation();
    //this.setState({ startDate: date});
     setDate(date)
  };
// onChange = (e) => {
  function onChange(e){
    //this.setState({ text: e.target.value });
    setTitle( e.target.value );
  };

  //handleClick = (e) => {
    function handleClick(e){
    if (props.isFullView !== true && !isEditable) {
      props.history.push("/item/" + props.item.id);
    }
    //const url = 'http://localhost:3000/item/'+ this.props.item.id;
    //window.location.href=url
  };

 // render() {
    const mystyle = {
     // cursor: pointer
    };
    //const input1 = React.createRef();
    //const props = this.props;
    let today = Date.now();
    let itemDate = Date.parse(props.item.date);
    let isPast = false;
    if (itemDate > today) {
      isPast = true;
    }
    return (
      <div
        className=" container text-center checkbox list-group"
        style={{ mystyle }}
      >
        <li className="list-group-item " key={props.item.id}>
          <input
            type="checkbox"
            className="float-left m-1  mr-3 "
            // defaultChecked={this.props.item.isCompleted}
            defaultChecked={props.item.completed}
            onChange={(e) => {
              props.completeTodo(props.item.id, {
                ...props.item,
                //isCompleted: e.target.checked,
                completed: e.target.checked,
              });
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          ></input>
          
          {isEditable ? (
            <div style={{cursor:'pointer'}}>
              <input
                type="textbox"
                className="float-left "
                //ref={input1}
                value={title}
                onChange={onChange}
                //value={this.props.item.text}
              ></input>
               <i className="fa fa-times float-right fa-lg mt-2 pl-2" onClick={(e)=>{setEditable(false)}}></i>
              <button
                className="float-right"
                onClick={(e) => {
                  e.stopPropagation();
                  props.editTodo(
                    props.item.id,
                    title,
                    startDate,
                    props.item.completed,
                    props.item.text
                  );
                    setEditable(false)
                  //this.setState({ isEditable: false });
                }}
              >
                Save
              </button>
             
              <span className=" float-right ">
                <DatePicker
                  selected={startDate}
                  onChange={handleChange}
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                />
              </span>
            </div>
          ) : (
            <div onClick={handleClick} style={{cursor:'pointer'}}>
              <span className="float-left  ">{props.item.title} </span>
              {/*<span className="float-left pl-3 ">{this.state.text} </span>*/}
              <i
                className="fa fa-pencil-square-o float-right  pl-2 pt-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setEditable(true)
                  //this.setState({ isEditable: true });
                }}
              ></i>
              <i
                className="fa fa-trash pl-2  pt-1 float-right"
                style={{ color: "black" }}
                onClick={(e) => {
                  e.stopPropagation();
                  //this.props.removeTodo(this.props.item.id);
                  props.deleteTodo(props.item.id);
                }}
              ></i>
              <i
                onClick={(e) => {
                  e.stopPropagation();
                  props.remainderTodo(props.item.id, {
                    ...props.item,
                    isReminderOn: e.target.checked,
                  });
                }}
                className="pr-2"
              >
                {props.item.isReminderOn ? (
                  <i
                    className="fa fa-bell float-right pt-1 pl-2"
                    style={{ color: "red" }}
                  ></i>
                ) : (
                  <i
                    className="fa fa-bell float-right pt-1 pl-2"
                    style={{ color: "black" }}
                  ></i>
                )}
              </i>
              {isPast ? (
                <span className="text-success float-right">
                  {props.item.date}
                </span>
              ) : (
                <span className=" text-danger float-right ">
                  {props.item.date}
                </span>
              )}
            </div>
          )}
        </li>
      </div>
    );
  }
//}

export default TodoItem;
