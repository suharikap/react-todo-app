import React from "react";

import  TodoItem  from "./todoitem";

const TodoList = (props) => {
  let isCompletedCount = 0;
  let activeCount = 0;

  for (const item of props.items) {
    if (item.isCompleted) {
      isCompletedCount = isCompletedCount + 1;
    } else {
      activeCount = activeCount + 1;
    }
  }

  return (
    <div>
      
      <form className="d-flex">
        <span className="pl-3">
          {" "}
          {isCompletedCount > 0 ? <h4>Completed:{isCompletedCount}</h4> : null}
        </span>
        <span className="pl-3">
          {" "}
          {activeCount > 0 ? <h4>active:{activeCount}</h4> : null}
        </span>
        <span className="pl-3">
          {isCompletedCount + activeCount > 0 ? (
            <h4>Totalcount = {isCompletedCount + activeCount}</h4>
          ) : null}
        </span>
      </form>
      <ul>
        {props.items
          .filter((item) => item.isCompleted !== true)
          .map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                setIsCompleted={props.setIsCompleted}
                updateReminderStatus={props.updateReminderStatus}
                updateSnoozeStatus={props.updateSnoozeStatus}
              />
            );
          })}

        {isCompletedCount > 0 ? <h4>Completed</h4> : null}

        {props.items
          .filter((item) => item.isCompleted === true)
          .map((item) => {
            return (
              <TodoItem
                key={item.id}
                item={item}
                setIsCompleted={props.setIsCompleted}
                updateReminderStatus={props.updateReminderStatus}
                updateSnoozeStatus={props.updateSnoozeStatus}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;


