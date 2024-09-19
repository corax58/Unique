import { useState } from "react";
import { cars } from "../data";
import { BsArrowRight } from "react-icons/bs";

const Models = () => {
  const [selectedFilter, setSelectedFilter] = useState(1);

  const filters = [
    {
      id: 1,
      label: "All",
    },
    {
      id: 2,
      label: "Premium",
    },
    {
      id: 3,
      label: "Hypercars",
    },
    {
      id: 4,
      label: "Sportcar",
    },
    {
      id: 5,
      label: "Cabriolet",
    },
    {
      id: 6,
      label: "Limousines",
    },
  ];

  const filterdCars = cars.filter((car) =>
    selectedFilter == 1
      ? car
      : car.tags.includes(filters[selectedFilter - 1].label)
  );

  return (
    <section
      id="cars"
      className=" flex flex-col items-center  w-full h-screen pt-16"
    >
      <div className=" text-gray-300 font-semibold pb-2">
        ONLY THE BEST CARS
      </div>
      <div className="text-6xl font-black ">Our Vehicle Fleet</div>
      <div className="font-medium text-xl py-6 flex flex-col justify-center items-center">
        <p>
          We provide our customers with the most incredible driving emotion.
        </p>
        <p>That's why we have only world-class cars in our fleet.</p>
      </div>
      <div className=" space-x-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`  transition-all duration-500 ease-in-out origin-left  p-1 px-4 rounded-lg font-medium ${
              filter.id == selectedFilter
                ? " bg-black text-white"
                : " bg-gray-100 "
            }`}
            onClick={() => setSelectedFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className=" w-full flex justify-center flex-wrap space-x-5 ">
        {filterdCars.slice(0, 7).map((car) => (
          <div key={car.id} className="  w-64 h-36 mt-5 ">
            <img
              src={car.img}
              className=" w-full h-full object-fill rounded-xl"
            />
          </div>
        ))}
      </div>
      <button className=" flex items-center rounded-full mt-5 font-bold border py-2 px-6 space-x-2 ">
        <span>{"Show All (83 models)"}</span>
        <BsArrowRight size={18} />
      </button>
    </section>
  );
};

export default Models;
