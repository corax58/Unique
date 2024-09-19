import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { CgCircleci } from "react-icons/cg";

const NavBar = () => {
  const [hasBg, setHasBg] = useState(false);

  window.onscroll = () => {
    if (window.scrollY > 100) {
      setHasBg(true);
    } else {
      setHasBg(false);
    }
  };
  console.log(hasBg);

  return (
    <nav
      className={` z-50 fixed px-28  h-16 w-screen ${
        hasBg ? "  backdrop-blur" : " "
      }`}
    >
      <div className=" flex justify-between h-full items-center  ">
        <div className=" text-xl font-semibold flex items-center space-x-1">
          <CgCircleci />
          <span>Unique</span>
        </div>
        <div className=" flex space-x-12 font-semibold text-sm items-center">
          <div className=" flex space-x-8 ">
            <a href="/#help">About Us</a>
            <a href="/#cars">Cars</a>
            <a href="/#features">Features</a>
            <a href="/#help">Help</a>
          </div>
          <button className=" bg-black text-white py-2 rounded-full px-4 flex items-center space-x-1">
            <FaApple className=" text-white" />
            <span>Download App</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
