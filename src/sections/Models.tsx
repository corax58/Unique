import { useRef, useState } from "react";
import { cars } from "../data";
import { BsArrowRight } from "react-icons/bs";
import { useInView, motion } from "framer-motion";

const Models = () => {
  const [selectedFilter, setSelectedFilter] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

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
      className="snap-start flex flex-col items-center  w-full h-screen pt-16"
    >
      <div className=" subsubheading pb-2">ONLY THE BEST CARS</div>
      <div className="heading ">Our Vehicle Fleet</div>
      <div className=" py-4 xl:py-6 flex flex-col  text-center subheading">
        <p>
          We provide our customers with the most incredible driving emotion.
        </p>
        <p>That's why we have only world-class cars in our fleet.</p>
      </div>
      <div className=" space-x-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`  transition-all duration-500 ease-in-out origin-left  p-1 px-2 m-1 md:px-4 rounded-lg font-medium ${
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

      <div className="overflow-clip w-full flex justify-between xl:justify-center flex-wrap xl:space-x-5  scal ">
        {filterdCars.slice(0, 6).map((car) => (
          <div
            key={car.id}
            className=" w-20 md:w-44 lg:w-64 h-20 md:h-28 xl:h-36 mt-5  "
          >
            <motion.img
              ref={ref}
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              src={car.img}
              className=" w-full h-full   object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
      <button className=" flex items-center rounded-full mt-10 md:mt-5 font-bold border py-2 px-6 space-x-2 ">
        <span>{"Show All (83 models)"}</span>
        <BsArrowRight size={18} />
      </button>
    </section>
  );
};

export default Models;
