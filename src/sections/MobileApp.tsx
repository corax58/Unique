import { FaApple } from "react-icons/fa";
import { phone1, phone2 } from "../assets";
import AnimatedItem from "./AnimatedItem";
const MobileApp = () => {
  return (
    <section className="snap-start w-full md:h-screen flex justify-between  items-center pt-16 overflow-clip ">
      <div className="w-1/2 h-full  relative  ">
        <div className=" absolute h-full  top-20">
          <AnimatedItem delay={0.2} className=" h-full relative " y={250}>
            <img src={phone2} className="   h-[85%] bottom-0  " />
          </AnimatedItem>
        </div>
        <div className=" absolute h-full  left-44 ">
          <AnimatedItem delay={0.1} className=" h-full relative " y={250}>
            <img src={phone1} className="   h-[85%] bottom-0  " />
          </AnimatedItem>
        </div>
      </div>
      <AnimatedItem
        delay={0}
        className=" w-1/2 space-y-2  flex flex-col pl-10"
        y={200}
      >
        <p className=" subsubheading">CONVENIENT INTERACTION</p>
        <p className=" heading  ">Modern App</p>
        <p className="  pr-24 xl:pr-32   py-5 subheading">
          We developed a simple and functional app. It is built in such a way as
          to simplify the problem of the car selection and rental process. View
          the location, statement and other information about each of the
          vehicles in one click.
        </p>
        <button className=" rounded-full w-max  px-6 py-2 bg-black font-bold text-white flex items-center space-x-2 ">
          <FaApple className=" text-white" />
          <span>Download App</span>
        </button>
      </AnimatedItem>
    </section>
  );
};

export default MobileApp;
