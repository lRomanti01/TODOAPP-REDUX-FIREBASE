
const Home = () => {

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen w-full p-4 bg-slate-400">
      Home
    </div>
  );
}

export default Home;
