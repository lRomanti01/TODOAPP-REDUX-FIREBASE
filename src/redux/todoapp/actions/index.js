import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

export const ADD_TODO = 'ADD_TODO'
export const GET_TODO = 'GET_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const postTodo = (newTodo, userId) => async (dispatch) => {
  try{
    await addDoc(collection(db, 'user', userId, "todos"),{
      id: newTodo.id,
      title: newTodo.title,
      description: newTodo.description,
      date: newTodo.date,
      completed: newTodo.completed    
    })
    dispatch({
      type: ADD_TODO,
      payload: newTodo
    })
  } catch (error) {
    console.error(error);
  }
}

export const getTodos = (userId) => async (dispatch) => {
  try {
    const q = query(collection(db, 'user', userId, 'todos'));
    const todos = await getDocs(q);
    const todosArray = [];

    todos.forEach((doc) => {
      const data = doc.data();
      todosArray.push({ id: doc.id, ...data });
    });
    dispatch({
      type: GET_TODO,
      payload: todosArray
    });
  } catch (error) {
    console.error(error);
  }
};

export const removeTodo = (idTodo, userId) => async (dispatch) => {
  try{
    const q = query(collection(db, 'user', userId, 'todos'));
    const todos = await getDocs(q);
    for(var snap of todos.docs){
      const data = snap.data()
      if(data.id === idTodo){
        await deleteDoc(doc(db, 'user', userId, 'todos', snap.id))
      }
    }
    dispatch({
      type: REMOVE_TODO,
      payload: idTodo
    })
  } catch (error) {
    console.error(error);
  }
};

export const updateTodo = (editedTodo, userId) => async (dispatch) => {
  try{
    const q = query(collection(db, 'user', userId, 'todos'));
    const todos = await getDocs(q);
    for(var snap of todos.docs){
      const data = snap.data()
      if(data.id === editedTodo.id){
        const todoRef = doc(db, 'user', userId, 'todos', snap.id);
        await updateDoc(todoRef, {
          id: editedTodo.id,
          title: editedTodo.title,
          description: editedTodo.description,
          date: editedTodo.date,
          completed: editedTodo.completed
        })
      }
    }
    dispatch({
      type: UPDATE_TODO,
      payload: editedTodo
    })
  } catch (error) {
    console.error(error);
  }
}

export const toggleTodo = (idTodo, userId) => async (dispatch) => {
  try{
    const q = query(collection(db, 'user', userId, 'todos'));
    const todos = await getDocs(q);
      for(var snap of todos.docs){
        const data = snap.data()
        if(data.id === idTodo){
          const todoRef = doc(db, 'user', userId, 'todos', snap.id);
          await updateDoc(todoRef, {
            completed: !data.completed
          })
        }
      }
      dispatch({
        type: TOGGLE_TODO,
        payload: idTodo
      })
  } catch (error) {
    console.error(error);
  }
}

export const clearCompleted = (allTodos, userId) => async (dispatch) => {
  try{
    const q = query(collection(db, 'user', userId, 'todos'));
    const todos = await getDocs(q);
      for(var snap of todos.docs){
        const data = snap.data()
        if(data.completed){
          await deleteDoc(doc(db, 'user', userId, 'todos', snap.id))
        }
      }
      dispatch({
        type: CLEAR_COMPLETED,
        payload: allTodos
      })
  }catch (error){
    console.error(error)
  }
};