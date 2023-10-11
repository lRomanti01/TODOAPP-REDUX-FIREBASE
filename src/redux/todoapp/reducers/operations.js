import { 
  ADD_TODO, 
  UPDATE_TODO, 
  REMOVE_TODO, 
  TOGGLE_TODO, 
  GET_TODO} from "../actions";

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

    case UPDATE_TODO: 
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if(item.id === data.id){
          item.title = data.title;
          item.description = data.description;
          item.date = data.date;
        }
        updatedArray.push(item)
      })
      return updatedArray

    case TOGGLE_TODO:
      let dataID = action.payload;
      const toggleUpdatedArray = [];
      state.map((item) => {
        if(item.id === dataID){
          item.completed = !item.completed;
        }
        toggleUpdatedArray.push(item)
      })
      return toggleUpdatedArray

    default: return state;
  }
}