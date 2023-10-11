import React, { useState } from "react";
import AddButton from "../components/AddButton";
import Form from "../components/Form";
import { useUserContext } from "../context/UserContext";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const { user } = useUserContext();

  return (
    <div className="px-3 flex justify-between items-center">
      <AddButton setVisible={setVisible}/>
      <p className="text-white font-semibold text-md pt-4">
        {user.displayName}
      </p>
      <Form visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default Header;
