//import Menu from "./components/Menu.jsx"
import MenuDetail from "./components/MenuDetail.jsx";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<MenuDetail />} path="/menu/:id" />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
