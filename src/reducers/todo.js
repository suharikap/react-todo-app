import types from "../actions/actionType";
//import todo from "../Pages/todo";

const initialState = 
   {
     loading : false,
     error: false,
     items:[]
    /*id: 1,
    text: "Hello",
    date: "Fri Jun 05 2020",
    startdate: new Date(),
    isCompleted: false,
    isReminderOn: false,
    isEditable: false,*/
    
  }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_TODO:
      return{
        ...state,
        items:[...state.items,action.todo]
      }
      /*return [...state, action.todo];
       OR
       return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          date: action.date,
          //startdate: Date.now(),
        },
      ];*/
   
    case types.COMPLETE_TODO:
      return{
        ...state,
        items:state.items.map((todo) => (todo.id === action.id ? action.todo : todo))
      }
      //return state.map((todo) => (todo.id === action.id ? action.todo : todo));
    /*state.map((todo) =>
        todo.id === action.id
          ? 
            action.todo
          : todo
      );*/
    case types.REMOVE_TODO:
      return{
        ...state,
        items:state.items.filter((todo) => todo.id !== action.id)
      }
      //return state.filter((todo) => todo.id !== action.id);

    case types.REMINDER_TODO:
      return{
        ...state,
        items:state.items.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              isReminderOn: !todo.isReminderOn,
            }
          : todo
        )}
    
     /* return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              isReminderOn: !todo.isReminderOn,
            }
          : todo
      );*/
    case types.EDIT_TODO:
      return{
        ...state,
        items:state.items.map((todo) => (todo.id === action.id ? action.todo : todo))
      }
     // return state.map((todo) => (todo.id === action.id ? action.todo : todo));

    case types.SET_TODO:
      return{
        ...state,   
        items:[...action.todos],
        loading :false
      }
      //return action.todos;

      case types.LOADING_TODO:
        return {
          ...state,
            loading: true,
            error:false
            //isError: false,
        };
      
      case types.ERROR_TODO:
        return{
         ...state,
          loading : false,
          error :true
        }
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
