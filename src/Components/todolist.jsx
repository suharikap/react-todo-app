import React from "react";
import TodoItem from "./todoitem";

const TodoList = (props) => {
  let isCompletedCount = 0;
  let activeCount = 0;
  console.log("props is ", props);
  for (const item of props.items) {
    if (item.isCompleted) {
      isCompletedCount = isCompletedCount + 1;
    } else {
      activeCount = activeCount + 1;
    }
  }
// console.log("onchange in", props.onChange)
console.log("this2", props.items);
  return (
    <div>
      <form className="d-flex">
        <span className="pl-3">
          {" "}
          {isCompletedCount > 0 ? (
            <h4>Completed = {isCompletedCount}</h4>
          ) : null}
        </span>
        <span className="pl-3">
          {" "}
          {activeCount > 0 ? <h4>Active = {activeCount}</h4> : null}
        </span>
        <span className="pl-3">
          {isCompletedCount + activeCount > 0 ? (
            <h4>Total = {isCompletedCount + activeCount}</h4>
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
                items={props.todo}
                onChange={props.onChange}
                handleChange={props.handleChange}
                setIsCompleted={props.setIsCompleted}
                completeTodo={props.completeTodo}
                remainderTodo={props.remainderTodo}
                updateSnoozeStatus={props.updateSnoozeStatus}
                removeTodo={props.removeTodo}
                dateChange={props.dateChange}
                editTodo={props.editTodo}
                history ={props.history}
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
                handleChange={props.handleChange}
                setIsCompleted={props.setIsCompleted}
                completeTodo={props.completeTodo}
                remainderTodo={props.remainderTodo}
                updateSnoozeStatus={props.updateSnoozeStatus}
                removeTodo={props.removeTodo}
                dateChange={props.dateChange}
                editTodo={props.editTodo}
                history ={props.history}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
