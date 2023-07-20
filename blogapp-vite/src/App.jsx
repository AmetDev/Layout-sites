import Menu from "./components/Menu.jsx";
import Profile from "./components/Profile.jsx";
function App() {
  return (
    <div className="flex justify-between flex-col w-max-[1200px] ml-[20%] mr-[20%]">
      <Menu />
      <Profile />
    </div>
  );
}

export default App;
