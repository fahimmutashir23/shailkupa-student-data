/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router";

const SmallMenu = ({ setOpen, open }) => {
  // Disable body scroll when the menubar is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
      return () => {
        document.body.classList.remove("no-scroll");
      };
    }
  }, [open]);
  return (
    <div className="bg-white h-screen overflow-y-auto">
      <div className="flex justify-between items-center p-3">
        <h1>Logo</h1>
        <IoCloseSharp onClick={() => setOpen(!open)} className="text-2xl" />
      </div>
      <hr />
      <div className="py-3">
        <ul className=" text-xl space-y-4">
          <li className="px-3">
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
          <li className="px-3">
            <Link>Page 5</Link>
          </li>
          <li className="px-3">
            <Link>Page 5</Link>
          </li>
          <li className="px-3">
            <Link>Page 5</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SmallMenu;
