import types from "./actionType";

export const addTodo = (text, date, startdate) => {
  return {
    type: types.ADD_TODO,
    text: text,
    date: date,
    startdate: new Date(),
    isCompleted: false,
    isReminderOn: false,
  };
};

export const completeTodo = (id) => ({
  type: types.COMPLETE_TODO,
  id,
});

export const dateChange = (date) => ({
  type: types.DATE_CHANGE,
  date,
});
export const removeTodo = (id, text) => ({
  type: types.REMOVE_TODO,
  id,
});

export const remainderTodo = (id) => ({
  type: types.REMINDER_TODO,
  id,
});

export const editTodo = (id) => ({
  type: types.EDIT_TODO,
  id,
});

export const setTodo = (id) => ({
  type: types.SET_TODO,
  id,
});

export const formtext = (name, age, email) => {
  return {
    type: types.FORM_TEXT,
    name: name,
    age: age,
    email: email,
  };
};

//name: "harik",
//age: "24",
//email: " suharikap@gmail.com",
//isEditable: true,

export const nameChange = (name) => ({
  type: types.NAME_CHANGE,
  name: name,
});
