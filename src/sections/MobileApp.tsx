import { FaApple } from "react-icons/fa";
import { phones } from "../assets";
const MobileApp = () => {
  return (
    <section className=" w-full h-screen flex items-center pt-16 ">
      <div className="w-1/2 h-full ">
        <img src={phones} className="  h-full " />
      </div>
      <div className=" w-1/2 space-y-2">
        <p className=" font-bold text-gray-400">CONVENIENT INTERACTION</p>
        <p className=" text-6xl font-black  ">Modern App</p>
        <p className=" font-medium text-xl pr-32  text-justify py-5">
          We developed a simple and functional app. It is built in such a way as
          to simplify the problem of the car selection and rental process. View
          the location, statement and other information about each of the
          vehicles in one click.
        </p>
        <button className=" rounded-full px-6 py-2 bg-black font-bold text-white flex items-center space-x-2 ">
          <FaApple className=" text-white" />
          <span>Download App</span>
        </button>
      </div>
    </section>
  );
};

export default MobileApp;
