import { CgCircleci } from "react-icons/cg";
import { FaApple } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav
      className={` z-50 fixed px-4 md:px-10 lg:px-20 xl:px-28  h-16 w-screen  backdrop-blur`}
    >
      <div className="  flex justify-between h-full items-center  ">
        <div className=" text-lg md:text-xl font-semibold flex items-center space-x-1">
          <CgCircleci />
          <span>Unique</span>
        </div>
        <div className=" flex space-x-6 lg:space-x-12 font-semibold text-sm items-center">
          <div className=" hidden md:flex space-x-4  text-sm lg:text-base ">
            <a href="/#help">About Us</a>
            <a href="/#cars">Cars</a>
            <a href="/#features">Features</a>
            <a href="/#help">Help</a>
          </div>
          <button className=" bg-black text-sm md:text-base text-white py-1 md:py-2 rounded-full px-4 flex items-center space-x-1">
            <FaApple className=" text-white  " />
            <span>Download App</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
