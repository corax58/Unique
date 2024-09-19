import { Ri24HoursLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiLightning } from "react-icons/pi";
import { LuShieldCheck } from "react-icons/lu";

const Features = () => {
  const cardClass =
    "border-2   flex flex-col w-72 rounded-3xl p-7  h-80    items-stretch justify-between";
  const labelClass = "font-bold text-xl";
  const cards = [
    {
      iconClass: "bg-blue-200 size-max  p-4 rounded-full",
      icon: <Ri24HoursLine size={30} />,
      text: "24/7 Car delivery",
    },
    {
      iconClass: "bg-red-200 size-max  p-4 rounded-full",
      icon: <IoChatbubblesOutline size={30} />,
      text: "24/7 technical support",
    },
    {
      iconClass: "bg-purple-200 size-max  p-4 rounded-full",
      icon: <PiLightning size={30} />,
      text: "All models have a premium package",
    },
    {
      iconClass: "bg-sky-200 size-max  p-4 rounded-full",
      icon: <LuShieldCheck size={30} />,
      text: "Absolute confidentiality",
    },
  ];
  return (
    <section
      id="features"
      className="w-full   h-screen pt-16 flex flex-col    justify-center"
    >
      <div className=" w-1/3">
        <div className="text-gray-300 font-semibold pb-2">
          TAKING CARE OF EVERY CLIENT
        </div>
        <div className=" text-6xl font-black">Key Features</div>
        <div className="font-medium text-xl py-6 ">
          <p>
            We are all about our clients comfort and safety. Thats why we
            provide the best service you could imagine.
          </p>
        </div>
      </div>
      <div className=" flex justify-between space-x-10">
        {cards.map((card) => (
          <div className={cardClass}>
            <div className={card.iconClass}>{card.icon}</div>
            <p className={labelClass}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
