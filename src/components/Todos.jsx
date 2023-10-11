import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { getTodos } from "../redux/todoapp/actions";
import { useUserContext } from "../context/UserContext";

const Todos = () => {
  const dispatch = useDispatch();
  const [openEditForm, setOpenEditForm] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState("");
  const { user } = useUserContext();

  const todos = useSelector((state) => state.operationReducer);
  console.log(todos);

  useEffect(() => {
    dispatch(getTodos(user.uid))
  }, [dispatch])

  return (
    <div className="py-3 px-2 bg-slate-400">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex gap-3 border-b bg-slate-100 py-2 px-4 rounded-xl mb-2"
        >
          <div className="flex items-center">
            <button
              className={`flex items-center justify-center rounded-full border-2 h-9 w-9 hover:border-slate-400
          ${
            todo.completed
              ? "bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700"
              : "inline-block"
          } `}
            >
              {todo.completed && <FaCheck className="fill-white" />}
            </button>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p
                className={`grow text-xl font-semibold ${
                  todo.completed
                    ? "text-gray-400 line-through"
                    : "text-gray-500"
                }`}
              >
                {todo.title}
              </p>
              <p className="text-sm px-1">{todo.description}</p>
              <p className="uppercase text-xs font-bold">{todo.date}</p>
            </div>
            <div className="flex justify-between gap-3">
              <button>
                <FaEdit
                  className="h-full w-9 fill-slate-700 hover:fill-slate-500"
                />
              </button>
              <button>
                <FaTrash
                  className="h-full w-7 fill-slate-700 hover:fill-slate-500"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
