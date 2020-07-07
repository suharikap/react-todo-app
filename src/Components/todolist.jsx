import React from "react";
import TodoItem from "./todoitem";

const TodoList = (props) => {
  let isCompletedCount = 0;
  let activeCount = 0;
  // console.log("props is ", props);
  for (const item of props.items) {
    if (item.completed) {
      isCompletedCount = isCompletedCount + 1;
    } else {
      activeCount = activeCount + 1;
    }
  }
  return (
    <div>
      <form className="d-flex mb-2 ml-4">
        <span className="pl-3">
          {" "}
          {isCompletedCount > 0 ? (
            <h5>Completed - {isCompletedCount}</h5>
          ) : null}
        </span>
        <span className="pl-3">
          {" "}
          {activeCount > 0 ? <h5>Active - {activeCount}</h5> : null}
        </span>
        <span className="pl-3">
          {isCompletedCount + activeCount > 0 ? (
            <h5>Total - {isCompletedCount + activeCount}</h5>
          ) : null}
        </span>
      </form>

      <ul>
        {props.items
          //.filter((item) => item.isCompleted !== true)
          .filter((item) => item.completed !== true)
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
                //removeTodo={props.removeTodo}
                deleteTodo={props.deleteTodo}
                dateChange={props.dateChange}
                editTodo={props.editTodo}
                history={props.history}
              />
            );
          })}

        {isCompletedCount > 0 ? <h5 className="m-3">Completed</h5> : null}

        {props.items
          // .filter((item) => item.isCompleted === true)
          .filter((item) => item.completed === true)
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
                //removeTodo={props.removeTodo}
                deleteTodo={props.deleteTodo}
                dateChange={props.dateChange}
                editTodo={props.editTodo}
                history={props.history}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default TodoList;
