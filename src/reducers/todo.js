import types from "../actions/actionType";

const initialState = [
  {
    id: 1,
    text: "Hello",
    date: "Fri Jun 05 2020",
    startdate: new Date(),
    isCompleted: false,
    isReminderOn: false,
    isEditable: false,
  },
];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          date: action.date,
          //startdate: Date.now(),
        },
      ];
    case types.DATE_CHANGE:
      return {
        startDate: action.date,
      };
    case types.COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      );
    case types.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case types.REMINDER_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              isReminderOn: !todo.isReminderOn,
            }
          : todo
      );
    case types.EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              isEditable: !todo.isEditable, 
            }
          : todo
      );
      case types.SET_TODO:
        return
    default:
      return state;
  }
};
// return [...otherTodos, newTodo];
/*  return state.map((todo, id) => {
          if(todo.id === action.id) {
            return {
              ...todo,
              id:todo.id,
              text: action.text,
              date: action.date
            }
          } else {
            return todo
          }
        })

        return state.map(todo =>
          
          todo.id === action.id ?
            {
              ...todo,
              text : action.text,
            } :
            todo
        );*/
