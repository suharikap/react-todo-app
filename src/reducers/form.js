import types from "../actions/actionType";

const initialState = {
  name: "suharika",
  age: "24",
  email: " suharikap@gmail.com",
  isEditable: true,
  
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.FORM_TEXT:
      console.log(action);
      return {
        ...state,

        name: action.name,
        age: action.age,
        email: action.email,
        isEditable: true,
      };

    default:
      return state;
  }
};
