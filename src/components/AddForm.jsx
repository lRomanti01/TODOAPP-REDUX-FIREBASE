import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaX } from "react-icons/fa6";
import { postTodo } from "../redux/todoapp/actions";
import { useUserContext } from "../context/UserContext";

//Component to write the values of the new Todo

function AddForm({ visible, setVisible }) {
  const dispatch = useDispatch();
  const { user } = useUserContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let date = new Date();

    //Get time for getting a number as an id

    let time = date.getTime();

    const day = date.getDate().toString().padStart(2, "0"); // Day of month
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month (0-11)
    const year = date.getFullYear().toString(); // Year
    const hours = date.getHours().toString().padStart(2, "0"); // Hours (0-23)
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Minutes

    const formattedDate = `${day}/${month}/${year}, ${hours}:${minutes}`;

    let todoObj = {
      id: time,
      title: title,
      description: description,
      date: formattedDate,
      completed: false,
    };
    setTitle("");
    setDescription("");
    setVisible(false);
    dispatch(postTodo(todoObj, user.uid, time));
  };

  const closeForm = () => {
    setVisible(false);
    setTitle("");
    setDescription("");
  };

  return (
    visible && (
      <div
        className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden opacity-100 flex flex-col items-center justify-center"
        style={{ background: "rgba(55, 65, 81, 0.7)" }}
      >
        <form
          onSubmit={handleSubmit}
          className="p-8 absolute sm:w-[80%] h-96 mx-auto md:max-w-xl bg-slate-100 bg-opacity-60 rounded-2xl overflow-hidden flex gap-6 flex-col transition-all duration-500 animate-scaleAnimation"
        >
          <p className="text-center text-2xl font-bold text-black uppercase">
            ADD ToDo
          </p>
          <button onClick={closeForm} className="absolute right-5 h-6">
            <FaX className="w-full h-full cursor-pointer hover:fill-red-500" />
          </button>
          <div className="mb-3">
            <label className="text-black text-xl font-semibold tracking-wider">
              Title
            </label>
            <input
              className="w-full mt-2 rounded-md h-10 p-3 border-2 border-gray-500 text-gray-800 font-semibold outline-none transition-all duration-500"
              type="text"
              placeholder="Write the title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="text-black text-xl font-semibold tracking-wider">
              Description
            </label>
            <input
              className="w-full mt-2 rounded-md h-10 p-3 border-2 border-gray-500 text-gray-800 font-semibold outline-none transition-all duration-500"
              type="text"
              placeholder="Write a description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="py-2 px-4 rounded-md font-bold text-white bg-slate-700 hover:bg-slate-600"
            >
              Add
            </button>
            <button
              onClick={closeForm}
              className="py-2 px-4 rounded-md font-bold text-white bg-slate-600 hover:bg-slate-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default AddForm;
