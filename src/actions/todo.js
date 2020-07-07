import types from "./actionType";

export const addTodo = (todo) => {
  return {
    type: types.ADD_TODO,
    todo
    /*text: text,
    date: date,
    startdate: new Date(),
    isCompleted: false,
    isReminderOn: false,*/
    
  };
};

export const completeTodo = (id,todo) => ({
  type: types.COMPLETE_TODO,
  id,
  todo
});

export const dateChange = (date) => ({
  type: types.DATE_CHANGE,
  date,
});
export const removeTodo = (id) => ({
  type: types.REMOVE_TODO,
  id,
});

export const remainderTodo = (id) => ({
  type: types.REMINDER_TODO,
  id,
});

export const editTodo = (id,todo) => ({
  type: types.EDIT_TODO,
  id,
  todo
});

export const setTodos = (todos) => ({
  type: types.SET_TODO,
  todos,
});
export const loadingTodo = () =>({
  type : types.LOADING_TODO,
  
});

export const errorTodo = () =>({
  type: types.ERROR_TODO
});
export const getTodo =() => ({
  type: types.GET_TODO
})

export const formtext = (name, age, email) => {
  return {
    type: types.FORM_TEXT,
    name: name,
    age: age,
    email: email,
  };
};

export const nameChange = (name) => ({
  type: types.NAME_CHANGE,
  name: name,
});

