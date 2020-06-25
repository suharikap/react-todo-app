import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as todoActions from "../actions/todo";
import TodoItem from "../Components/todoitem";

class Item extends Component {
  render() {
    console.log("this4", this.props);

    let id = parseInt(this.props.match.params.id);
    let items = this.props.todo;
    let item = {};
    for (var item1 of items) {
      if (item1.id === id) {
        item = item1;
      }
    }
    console.log("item", item);
    return (
      <TodoItem
        key={item.id}
        item={item}
        isFullView={true}
        updateTodo={this.props.actions.updateTODO}
        dateChange={this.props.actions.dateChange}
        completeTodo={this.props.actions.completeTodo}
        removeTodo={this.props.actions.removeTodo}
        editTodo={this.props.actions.editTodo}
        remainderTodo={this.props.actions.remainderTodo}
      />
    );
  }
}
const mapStateToProps = ({ todo }) => ({
  todo,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(todoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
