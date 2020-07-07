import types from "../actions/actionType";
import { loadingTodo , errorTodo , setTodos } from "../actions/todo";
import axios from "axios";

const apiMiddleware = store => dispatch => action => {
    dispatch(action);

    switch (action.type) {
        case types.GET_TODO: 
            dispatch(loadingTodo());
            setTimeout(() => {
            axios.get("http://localhost:9000/db/todo")
            .then((response) => {
             dispatch(setTodos(response.data));
            })
            .catch((error) => {
            dispatch(errorTodo());
              console.log(error);
            });
        }, 1000);
            break;

    default:
        break;
    }
};

export default apiMiddleware;


