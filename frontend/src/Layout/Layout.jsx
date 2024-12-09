import { Outlet } from "react-router";
import bg from "../assets/theme.jpg";

const Layout = () => {
  return (
      <div 
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover bg-no-repeat bg-center bg-fixed min-h-screen">
        <Outlet />
      </div>
  );
};

export default Layout;
