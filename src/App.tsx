import FavoriteBox from "./components/FavoriteBox";
import NavList from "./components/NavList";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div className="flex flex-col gap-8 pb-10">
      <header className="h-[80px] bg-red-400">Header</header>
      <main className="w-3/5 mx-auto flex gap-4">
        <nav className="w-1/4 flex flex-col gap-6">
          <UserCard />
          <NavList />
        </nav>
        <div className="w-3/4 flex flex-col gap-4">
          <div className="uppercase font-semibold text-brand-primary shadow-md p-4 rounded-lg bg-white">
            <h1 className="text-lg">Favorilerim</h1>
          </div>
          <FavoriteBox />
        </div>
      </main>
    </div>
  );
};

export default App;
