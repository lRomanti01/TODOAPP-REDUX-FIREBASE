import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useUserContext } from "../context/UserContext";

const TodoComputed = () => {

  const { user } = useUserContext();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationReducer);
  const computedItemLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <section className="p-4 flex justify-between bg-white rounded-md transition-all duration-500">
      <span className="text-gray-400">{computedItemLeft} items left</span>
      </section>
  );
};

export default TodoComputed;
