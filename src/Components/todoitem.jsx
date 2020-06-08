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
            props.setIsCompleted(props.item.id, e.target.checked)
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
            <i
              onClick={() =>
                props.updateReminderStatus(
                  props.item.id,
                  !props.item.isReminderOn
                )
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
          </span>
        ) : (
          <span className=" text-danger float-right ">
            <i
              onClick={() =>
                props.updateReminderStatus(
                  props.item.id,
                  !props.item.isReminderOn
                )
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
          </span>
        )}
      </li>
    </div>
  );
};



export default TodoItem;

