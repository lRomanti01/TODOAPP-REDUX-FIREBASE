import Todos from "../components/Todos";
import Header from "../components/Header";
import TodoComputed from "../components/TodoComputed";
import { logout } from "../config/firebase";

function Home() {

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full p-4 bg-slate-400">
      <main className="mx-auto md:max-w-xl">
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
        <Todos />
        <TodoComputed />
      </main>
    </div>
  );
}

export default Home;
