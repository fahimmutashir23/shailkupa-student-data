import { Outlet } from "react-router";
import bg from "../assets/theme.jpg";

const Layout = () => {
  return (
      <div 
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-cover lg:bg-contain bg-no-repeat lg:bg-repeat-x bg-center bg-fixed min-h-screen">
        <Outlet />
      </div>
  );
};

export default Layout;
