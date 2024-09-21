import { FaApple } from "react-icons/fa";
import "./footer.css";
import { circle } from "../assets";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <section
      id="help"
      className="md:snap-start w-full md:h-screen overflow-clip py-16"
    >
      <div className="  h-52 md:h-3/5 w-full card bg-gradient-to-tr from-black to-zinc-900 rounded-3xl shadow-zinc-700 shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        />
        <div className=" absolute   h-full w-full">
          <div className=" z-50 items-center  justify-center flex-col flex h-full text-white space-y-5 md:space-y-10">
            <div className="heading  text-center z-20">
              Drive with Unique Today
            </div>
            <div className=" z-20  subheading">
              {" "}
              Get the app to explore the world of premium cars
            </div>
            <div>
              <button className=" rounded-full px-4 py-1 md:px-8 md:py-4 text-black font-bold bg-white flex items-center space-x-2 ">
                <FaApple className=" text-black" size={25} />

                <span className=" text-lg">Download app</span>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full relative  z-0">
          <div className=" scale-110  -right-48 hidden md:block md:absolute">
            <motion.img
              ref={ref}
              initial={{ rotate: "0deg" }}
              animate={isInView ? { rotate: "-75deg" } : { rotate: "0deg" }}
              src={circle}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            />
          </div>
          <div className=" scale-[0.4] md:scale-50   -rotate-90 -right-48 absolute">
            <motion.img
              ref={ref}
              initial={{ rotate: "0deg" }}
              animate={isInView ? { rotate: "90deg" } : { rotate: "0deg" }}
              src={circle}
              transition={{
                duration: 1,
                delay: 0.2,
              }}
            />
          </div>
        </div>
      </div>
      <div className="  flex flex-col-reverse md:flex-row  justify-between text-lg font-medium md:items-end  mt-16 md:mt-0 h-2/5  ">
        <div className=" flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mb-0">
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div className=" flex flex-col  space-y-4">
          <p>About Us</p>
          <p>Cars</p>
          <p>Features</p>
          <p>Help</p>
        </div>
        <div className=" flex space-y-4 flex-col mb-4  h-full justify-center">
          <p className=" font-extrabold text-xl">Subscribe to News</p>
          <input
            type="text"
            className=" bg-gray-200 px-4 py-2 rounded-lg"
            placeholder="Your email"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
