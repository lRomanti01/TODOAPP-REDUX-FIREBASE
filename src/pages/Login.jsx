import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {

  const { user } = useUserContext();
  useRedirectActiveUser(user, "/home");

  const handleClick = () => {
    signInWithPopup(auth, provider)
  };

  return (
    <div className="min-h-screen bg-slate-400 flex justify-center items-center flex-col gap-5">
      <h1 className="text-center text-5xl uppercase font-bold">Sign In</h1>
      <button
        onClick={handleClick}
        className="bg-[#558aed] font-bold rounded-md p-1 text-white hover:bg-[#5b89ff]"
      >
        <div className="flex justify-between items-center">
          <img
            src="/src/assets/googleIcon.png"
            alt="Google Icon"
            className="h-12 mr-1"
          />
          <p className="px-3">Sign In With Google</p>
        </div>
      </button>
    </div>
  );
};

export default Login;
