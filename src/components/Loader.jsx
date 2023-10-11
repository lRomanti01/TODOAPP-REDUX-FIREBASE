import React from "react";
import { BiLoader } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="min-h-screen w-full p-4 bg-slate-400 flex items-center justify-center">
      <p className="text-2xl font-bold flex items-center justify-center flex-col gap-3">
        <BiLoader className="animate-spin"/>
        Loading...
      </p>
    </div>
  );
};

export default Loader;
