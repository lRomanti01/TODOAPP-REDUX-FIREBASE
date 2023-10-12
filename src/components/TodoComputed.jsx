import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { clearCompleted } from "../redux/todoapp/actions";
import { useUserContext } from "../context/UserContext";

function TodoComputed(){

  const dispatch = useDispatch();
  const { user } = useUserContext();
  
  const todos = useSelector((state) => state.operationReducer);
  const computedItemLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <section className="p-4 flex justify-between bg-white bg-opacity-60 rounded-md transition-all duration-500">
      <span className="text-black font-semibold">{computedItemLeft} items left</span>
      <button
        className="text-black hover:text-gray-600 font-semibold"
        onClick={() => dispatch(clearCompleted(todos, user.uid))}
      >
        Clear completed
      </button>
    </section>
  );
};

export default TodoComputed;
