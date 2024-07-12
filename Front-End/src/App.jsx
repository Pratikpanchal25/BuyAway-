import { Outlet } from "react-router-dom";
import Home_mid from "./Home/Home_mid.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import "./index.css";

function App() {
  return (
    <>
      <div className="min-h-screen poppins-bold-italic w-full bg-[#E7F6F2]">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
