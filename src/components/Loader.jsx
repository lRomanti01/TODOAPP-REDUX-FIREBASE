import React from "react";
import { BiLoader } from "react-icons/bi";

function Loader() {
  return (
    <div className="relative min-h-screen w-full p-4 bg-slate-400 flex items-center justify-center">
      <div className="absolute w-full h-full bg-[url('./assets/Dawn.png')] bg-center bg-cover bg-no-repeat backdrop-blur-md blur-sm"></div>
      <div className="z-10">
        <p className="text-2xl font-bold flex items-center justify-center flex-col gap-3">
          <BiLoader className="animate-slowSpin w-20 h-20" />
          Loading...
        </p>
      </div>
    </div>
  );
}

export default Loader;
