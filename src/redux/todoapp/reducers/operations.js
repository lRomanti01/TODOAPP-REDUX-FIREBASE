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
    default: return state;
  }
}