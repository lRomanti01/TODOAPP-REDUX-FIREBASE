import React, { useState } from "react";
import { BiExit } from "react-icons/bi";
import AddButton from "../components/AddButton";
import AddForm from "./AddForm";
import { logout } from "../config/firebase";

import { useUserContext } from "../context/UserContext";

function Header() {
  const [visible, setVisible] = useState(false);
  const { user } = useUserContext();

  const userName = user.displayName.split(" ").slice(0, 2).join(" ");

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-3 flex justify-between items-center">
      <div>
        <h1 className="text-slate-100 font-bold text-5xl tracking-widest cursor-pointer hover:animate-pulse">
          TODO
        </h1>
        <AddButton visible={visible} setVisible={setVisible} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-5">
          <img
            src={user.photoURL}
            alt={userName}
            className="w-16 h-16 rounded-full border-2 border-white transition-all duration-150 hover:scale-105"
          />
          <button
            className="w-16 flex items-center justify-center rounded-full text-white font-bold border-2 
          hover:bg-slate-600 hover:bg-opacity-30 hover:shadow-md hover:shadow-white transition-all"
            onClick={handleLogout}
          >
            <BiExit className="w-10 h-10" />
          </button>
        </div>
        <p className="text-white font-semibold text-md pb-3 mt-4">{userName}</p>
      </div>

      <AddForm visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default Header;
