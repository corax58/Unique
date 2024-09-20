import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import {
  carlogo1,
  carlogo2,
  carlogo3,
  carlogo4,
  carlogo5,
  carlogo6,
  carlogo7,
  carlogo8,
  herocar,
  map,
} from "../assets";
import { useState } from "react";
import AnimatedItem from "./AnimatedItem";

const Hero = () => {
  const [selected, setSeleted] = useState(4);
  const carLogos: { id: number; src: string }[] = [
    {
      id: 1,
      src: carlogo1,
    },
    {
      id: 2,
      src: carlogo2,
    },
    {
      id: 3,
      src: carlogo3,
    },
    {
      id: 4,
      src: carlogo4,
    },
    {
      id: 5,
      src: carlogo5,
    },
    {
      id: 6,
      src: carlogo6,
    },
    {
      id: 7,
      src: carlogo7,
    },
    {
      id: 8,
      src: carlogo8,
    },
  ];

  return (
    <section className=" snap-start h-max md:h-screen topPadding w-full flex flex-col  justify-center items-center">
      <div className=" flex flex-col-reverse md:flex-row  w-full justify-between ">
        <AnimatedItem
          className=" w-full md:w-1/3 space-y-4 md:space-y-8"
          delay={0}
          y={100}
        >
          <p className=" heading ">Premium Car Rental In New York</p>
          <div className=" w-full md:w-4/5">
            <p className=" subheading ">
              Don't deny yourself the pleasure of driving the best premium cars
              from around the world here and now
            </p>
          </div>
        </AnimatedItem>
        <AnimatedItem className="relative w-full md:w-2/3 " delay={0} y={100}>
          <img
            src={map}
            className=" block md:absolute opacity-50 h-full w-full "
          />
          <img src={herocar} className=" block md:absolute " />
        </AnimatedItem>
      </div>

      <AnimatedItem
        delay={0.1}
        y={50}
        className="hidden md:flex mt-10 items-center w-full space-x-5"
      >
        <button
          className="p-2 rounded-full  border-2 text-xl "
          onClick={() => {
            if (selected == 1) setSeleted(8);
            else setSeleted(selected - 1);
          }}
        >
          <FaArrowLeft />
        </button>
        <div className="  w-full h-4 md:h-16 lg:h-24   flex space-x-10 ">
          {carLogos.map((car) => (
            <div
              className={`  w-full px-2 grayscale   py-5 ${
                car.id == selected
                  ? "rounded-xl border-gray-200 border-2 grayscale-0"
                  : ""
              }`}
              key={car.id}
            >
              <img src={car.src} className=" object-contain w-full h-full " />
            </div>
          ))}
        </div>
        <button
          className="p-2 rounded-full border-2 text-xl "
          onClick={() => {
            if (selected == 8) setSeleted(1);
            else setSeleted(selected + 1);
          }}
        >
          <FaArrowRight />
        </button>
      </AnimatedItem>
    </section>
  );
};

export default Hero;
