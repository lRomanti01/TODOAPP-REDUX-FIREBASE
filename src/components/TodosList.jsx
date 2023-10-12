import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { removeTodo, toggleTodo } from "../redux/todoapp/actions";
import EditForm from "./EditForm";
import { getTodos } from "../redux/todoapp/actions";
import { useUserContext } from "../context/UserContext";

function TodosList() {
  const dispatch = useDispatch();
  const [openEditForm, setOpenEditForm] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState("");
  const { user } = useUserContext();

  const todos = useSelector((state) => state.operationReducer);
  console.log(user.photoURL);

  const handleEditFormWithSelectedTodo = (todo) => {
    setOpenEditForm(true);
    setSelectedTodo(todo);
  };

  useEffect(() => {
    dispatch(getTodos(user.uid));
  }, [dispatch]);

  return (
    <main className="py-3 px-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex gap-3 border-b bg-slate-100 bg-opacity-60 py-2 px-10 rounded-xl mb-2 hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center">
            <button
              onClick={() => dispatch(toggleTodo(todo.id, user.uid))}
              className={`overflow-hidden flex items-center justify-center rounded-full border-2 h-9 w-9 border-slate-600 hover:border-slate-400`}
            >
              <div
                className={`w-full h-full flex items-center justify-center
               ${
                 todo.completed
                   ? "bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 animate-appearance"
                   : "bg-gradient-to-r from-slate-500 via-slate-600 to-slate-700 animate-appearanceOut"
               }`}
              >
                {todo.completed ? (
                  <FaCheck
                    className={`fill-white h-8 w-6 transition-all duration-500`}
                  />
                ) : (
                  <FaCheck
                    className={`fill-transparent h-8 w-6 transition-all duration-500`}
                  />
                )}
              </div>
            </button>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <p
                className={`grow text-xl font-semibold ${
                  todo.completed
                    ? "text-gray-400 line-through"
                    : "text-gray-700"
                }`}
              >
                {todo.title}
              </p>
              <p className="text-sm px-1">{todo.description}</p>
              <p className="uppercase text-xs font-bold">{todo.date}</p>
            </div>
            <div className="flex justify-between gap-3 ml-3">
              <button>
                <FaEdit
                  onClick={() => handleEditFormWithSelectedTodo(todo)}
                  className="h-full w-9 fill-slate-700 hover:fill-slate-500"
                />
              </button>
              <button>
                <FaTrash
                  onClick={() => dispatch(removeTodo(todo.id, user.uid))}
                  className="h-full w-7 fill-slate-700 hover:fill-slate-500"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
      {openEditForm && (
        <EditForm
          selectedTodo={selectedTodo}
          openEditForm={openEditForm}
          setOpenEditForm={setOpenEditForm}
        />
      )}
    </main>
  );
}

export default TodosList;
