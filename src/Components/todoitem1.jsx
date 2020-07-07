import React from "react";

const TodoItem = (props) => {
  const mystyle = {};

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
      <li className="list-group-item" key={props.item.id}>
        <input
          type="checkbox"
          className="float-left m-2"
          defaultChecked={props.item.isCompleted}
          onChange={(e) =>
            //props.updateTODO(props.item.id, {...props.item, isCompleted: e.target.checked })
            props.completeTodo(props.item.id, {...props.item, isCompleted: e.target.checked })
          }
        ></input>

        <span className="float-left pl-3 ">{props.item.text} </span>

        <i>
          {props.item.isSnoozeOn ? (
            <button>Snoozed for 1hr</button>
) : (
            <button
              onClick={() =>
                props.updateSnoozeStatus(
                  props.item.id,
                  !props.item.isSnoozeOn
                )
              }
            >
              Snooze
            </button>
          )}
        </i>
        <i
          onClick={() =>
            props.updateSnoozeStatus(
              props.item.id,
              !props.item.isSnoozeOn
            )
          }
        >
          {props.item.isSnoozeOn ? <i class="fa fa-times pl-4"></i> : null}
        </i>
        {isPast ? (
          <span className="text-success float-right">
            {/*<i onClick={() =>props.updateReminderStatus(props.item.id,!props.item.isReminderOn)*/}
            <i onClick={(e) =>props.remainderTodo(props.item.id, {...props.item, isReminderOn: e.target.checked })
              }
              className="pr-2"
            >
              {props.item.isReminderOn ? (
                <i class="fa fa-bell" style={{ color: "red" }}></i>
              ) : (
                <i class="fa fa-bell" style={{ color: "black" }}></i>
              )}
            </i>
            {props.item.date}
            <i class="fa fa-trash pl-2"  style={{ color: "black" }} onClick={() =>
                props.removeTodo( props.item.id )}></i>
          </span>
        ) : (
          <span className=" text-danger float-right ">
             {/*<i onClick={() =>props.updateReminderStatus(props.item.id,!props.item.isReminderOn)*/}
             <i onClick={(e) =>props.remainderTodo(props.item.id, {...props.item, isReminderOn: e.target.checked })
              }
              className="pr-2"
            >
              {props.item.isReminderOn ? (
                <i className="fa fa-bell" style={{ color: "red" }}></i>
              ) : (
                <i className="fa fa-bell" style={{ color: "black" }}></i>
              )}
            </i>
            {props.item.date}
            <i class="fa fa-trash pl-2"  style={{ color: "black" }} onClick={() =>
                props.removeTodo( props.item.id )}></i>
            <i class="fa fa-pencil-square-o" onChange={() =>
                props.editTodo( props.item.id  )}></i>
          </span>
        )}
      </li>
    </div>
  );
};



export default TodoItem;
