import { Ri24HoursLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiLightning } from "react-icons/pi";
import { LuShieldCheck } from "react-icons/lu";
import AnimatedItem from "./AnimatedItem";

const Features = () => {
  const cardClass =
    "border-2   flex flex-col w-72 rounded-3xl p-7  h-64 xl:h-80    items-stretch justify-between";
  const labelClass = "font-bold text-xl";
  const cards = [
    {
      iconClass: "bg-blue-200 size-max  p-4 rounded-full",
      icon: <Ri24HoursLine size={30} />,
      text: "24/7 Car delivery",
      delay: 0,
    },
    {
      iconClass: "bg-red-200 size-max  p-4 rounded-full",
      icon: <IoChatbubblesOutline size={30} />,
      text: "24/7 technical support",
      delay: 0.1,
    },
    {
      iconClass: "bg-purple-200 size-max  p-4 rounded-full",
      icon: <PiLightning size={30} />,
      text: "All models have a premium package",
      delay: 0.2,
    },
    {
      iconClass: "bg-sky-200 size-max  p-4 rounded-full",
      icon: <LuShieldCheck size={30} />,
      text: "Absolute confidentiality",
      delay: 0.3,
    },
  ];
  return (
    <section
      id="features"
      className="w-full snap-start    h-screen topPadding flex flex-col    justify-center"
    >
      <AnimatedItem className=" w-1/3" delay={0} y={300}>
        <div className="subsubheading pb-2">TAKING CARE OF EVERY CLIENT</div>
        <div className=" heading">Key Features</div>
        <div className="subheading py-6 ">
          <p>
            We are all about our clients comfort and safety. Thats why we
            provide the best service you could imagine.
          </p>
        </div>
      </AnimatedItem>

      <div className=" flex justify-between space-x-10 overflow-clip">
        {cards.map((card) => (
          <AnimatedItem
            key={card.text}
            className={cardClass}
            delay={card.delay}
            y={200}
          >
            <div className={card.iconClass}>{card.icon}</div>
            <p className={labelClass}>{card.text}</p>
          </AnimatedItem>
        ))}
      </div>
    </section>
  );
};

export default Features;
