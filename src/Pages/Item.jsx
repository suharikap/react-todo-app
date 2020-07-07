import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as todoActions from "../actions/todo";
import TodoItem from "../Components/todoitem";
import axios from "axios";

const Item = (props) => {
  let id = parseInt(props.match.params.id);
  let items = props.todo.items;
  let item = {};
  for (var item1 of items) {
    if (item1.id === id) {
      item = item1;
    }
  }
  
  const [text, setText] = useState(item.text);
  const[isTyping,setTyping]=useState(false)
  const[typed,setTyped]=useState(false)

  function handleChange(e) {
    setText(e.target.value);
    setTyping(true)
    setTyped(false)
    editTodo(item.id, item.title, item.date, e.target.value, item.completed)
  }
  
  function editTodo(id, title, date , text, completed) {
    let requestObj = {
      text: text,
      title: title,
      date: date,
      completed:completed
    }; 
    axios
      .put("http://localhost:9000/db/todo/" + id, requestObj)
      .then((response) => {
        props.actions.editTodo(id, response.data);
        setTimeout(() => {
          setTyped(true)
          setTyping(false)
        }, 1000);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      {(item.title) &&
      (<div>
      <TodoItem key={item.id} item={item} isFullView={true} />
      <h5 className="mt-2" style={{ marginLeft: "13%" }}>Note:</h5>
      <div className="text-center mt-2 " >
        <textarea
          rows="3"
          style={{ width: "70%" }}
          value={text}
          onChange={handleChange}
          
        ></textarea>
       
      </div>
      <div className="mt-2" style={{ marginLeft: "15%" }}>
        {isTyping && <h6>Saving...</h6> }
        {typed && <h6>Saved</h6>}
        </div>
        </div>)
}
    </div>
  );
};
const mapStateToProps = ({ todo }) => ({
  todo,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
