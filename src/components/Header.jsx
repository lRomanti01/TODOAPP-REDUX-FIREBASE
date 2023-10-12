import React, { useState } from "react";
import AddButton from "../components/AddButton";
import AddForm from "./AddForm";

import { useUserContext } from "../context/UserContext";

function Header() {
  const [visible, setVisible] = useState(false);
  const { user } = useUserContext();

  const userName = user.displayName.split(' ').slice(0, 2).join(' ')

  return (
    <div className="px-3 flex justify-between items-center">
      <div>
        <h1 className="text-slate-100 font-bold text-5xl tracking-widest">
          TODO
        </h1>
        <AddButton visible={visible} setVisible={setVisible} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={user.photoURL}
          alt={userName}
          className="w-16 h-16 rounded-full border-2 border-white transition-all duration-150 hover:scale-105"
        />
        <p className="text-white font-semibold text-md pt-1 mt-4">{userName}</p>
      </div>
      <AddForm visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default Header;
