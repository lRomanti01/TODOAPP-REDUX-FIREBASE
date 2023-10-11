import { 
  ADD_TODO, 
  UPDATE_TODO, 
  REMOVE_TODO, 
  TOGGLE_TODO, 
  CLEAR_COMPLETED, 
  GET_TODO } from "../actions";

const initialState = []

export const operationReducer = (state = initialState, action) => {
  switch(action.type){
    
    case ADD_TODO:
      return [...state, action.payload];

    case GET_TODO: 
      return action.payload

    case REMOVE_TODO: 
      const filteredTodos = state.filter((todo) => todo.id !== action.payload)
      return filteredTodos;

    default: return state;
  }
}