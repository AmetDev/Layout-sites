import Menu from "./components/Menu.jsx";
import Profile from "./components/Profile.jsx";
import Articles from "./components/Articles.jsx";
function App() {
  return (
    <div className="flex justify-between flex-col w-max-[1200px] ml-[20%] mr-[20%]">
      <Menu />
      <Profile />
      <Articles />
    </div>
  );
}

export default App;
