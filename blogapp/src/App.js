import { Head } from "./components/Head";
import { Profile } from "./components/Profile";

export default function App() {
  return (
    <div className="flex justify-between flex-col w-max-[1200px] ml-[15%] mr-[15%]">
      <Head/>
      <Profile/>
    </div>
  )
}