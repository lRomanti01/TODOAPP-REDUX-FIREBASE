import React from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux/es/hooks/useSelector";

// Button component to add more todos
function AddButton({ setVisible }){
  const todos = useSelector((state) => state.operationReducer);

  return (
    <button
      className="mt-5 flex flex-col-reverse sm:flex-row items-center gap-2 mr-7"
      onClick={() => setVisible(true)}
    >
      <FaPlus className="h-full w-9 fill-white hover:fill-slate-200 hover:animate-halfSpin transition-all duration-150" />
      {!todos.length && (
        <p className="font-bold text-md uppercase text-white animate-pulse">
          Click to add task
        </p>
      )}
    </button>
  );
}

export default AddButton;
