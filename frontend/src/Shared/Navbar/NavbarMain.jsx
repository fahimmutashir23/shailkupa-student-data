import HoverCart from "@/Pages/Cart/HoverCart";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router";

const NavbarMain = () => {
  return (
    <div className="bg-color_1 hidden lg:block relative">
      <div className="max-w-7xl mx-auto text-white flex justify-between">
        <div>
          <ul className="flex items-center gap-3 text-xl">
            <li className="px-4 py-5 bg-color_4/20">
              <Link>Page 1</Link>
            </li>
            <li className="px-3">
              <Link>Page 2</Link>
            </li>
            <li className="px-3">
              <Link>Page 3</Link>
            </li>
            <li className="px-3">
              <Link>Page 4</Link>
            </li>
            <li className="px-3">
              <Link>Page 5</Link>
            </li>
          </ul>
        </div>
        <Link to='/cart' className="flex items-stretch group">
          <div className="flex items-center gap-2 bg-color_2/50 px-4 py-5 text-xl">
            <IoCartSharp className="text-2xl" />
            My Cart
          </div>
          <div className="bg-color_2 px-4 py-5 text-xl">00</div>
          <HoverCart />
        </Link>
      </div>
    </div>
  );
};

export default NavbarMain;
