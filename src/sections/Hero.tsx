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
} from "../assets";
import { useState } from "react";

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
    <section className="  pt-16 w-full h-screen flex flex-col justify-center items-center">
      <div className=" flex">
        <div className="  w-1/3 space-y-8">
          <p className=" text-7xl font-black">Premium Car Rental In New York</p>
          <div className=" w-4/5">
            <p className=" text-lg font-medium text-justify ">
              Don't deny yourself the pleasure of driving the best premium cars
              from around the world here and now
            </p>
          </div>
        </div>
        <div className=" w-2/3">
          <img src={herocar} />
        </div>
      </div>
      <div className="flex items-center w-full space-x-5">
        <button
          className="w-10 h-10 rounded-full  border-2 text-xl "
          onClick={() => {
            if (selected == 1) setSeleted(8);
            else setSeleted(selected - 1);
          }}
        >
          {"<"}
        </button>
        <div className="  w-full h-24  flex space-x-10 ">
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
          className="size-10 rounded-full border-2 text-xl "
          onClick={() => {
            if (selected == 8) setSeleted(1);
            else setSeleted(selected + 1);
          }}
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default Hero;
