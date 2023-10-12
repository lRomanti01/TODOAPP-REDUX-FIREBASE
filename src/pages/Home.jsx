import TodosList from "../components/TodosList";
import Header from "../components/Header";
import TodoComputed from "../components/TodoComputed";
import { logout } from "../config/firebase";
import { useUserContext } from "../context/UserContext";

function Home() {
  const { user } = useUserContext();
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
        <Header />
        <TodosList />
        <TodoComputed />
      </div>
    </div>
  );
}

export default Home;
