import TodosList from "../components/TodosList";
import Header from "../components/Header";
import TodoComputed from "../components/TodoComputed";
import { logout } from "../config/firebase";

function Home() {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-400 flex">
      <div className="absolute w-full h-full bg-[url('./assets/Dawn.png')] bg-center bg-cover bg-no-repeat backdrop-blur-md blur-sm"></div>
      <div className="mx-auto md:max-w-xl z-10 p-10">
        <div className="flex justify-between">
          <h1 className="text-slate-100 px-3 font-bold text-5xl tracking-widest">
            TODO
          </h1>
          <button
            className="bg-slate-500 p-4 rounded-xl text-white font-bold border-2 
          hover:bg-slate-600 hover:shadow-md
           hover:shadow-white transition-all"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>

        <Header />
        <TodosList />
        <TodoComputed />
      </div>
    </div>
  );
}

export default Home;
