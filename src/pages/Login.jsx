import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import googleIcon from "../assets/googleIcon.png"

function Login() {
  const { user } = useUserContext();
  useRedirectActiveUser(user, "/home");

  const handleClick = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <main className="min-h-screen bg-slate-400 flex justify-center items-center ">
      <div className="absolute w-full h-full bg-[url('./assets/Montains.jpg')] bg-center bg-cover bg-no-repeat backdrop-blur-md blur-sm"></div>
      <div className="bg-slate-100 bg-opacity-30 z-10 p-12 md:p-28 flex justify-center items-center flex-col gap-10 rounded-2xl hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-black">
        <h1 className="text-center text-5xl uppercase font-bold text-black">
          Sign In
        </h1>
        <button
          onClick={handleClick}
          className="bg-[#558aed] font-bold rounded-md p-1 text-white hover:bg-[#5b89ff]"
        >
          <div className="flex justify-between items-center rounded-full">
            <img src={googleIcon} alt="Google Icon" className="h-12 mr-1" />
            <p className="px-3">Sign In With Google</p>
          </div>
        </button>
      </div>
    </main>
  );
}

export default Login;
