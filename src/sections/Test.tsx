import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import AnimatedItem from "./AnimatedItem";
const Test = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, [isInView]);

  return (
    <div>
      <div className=" snap-y snap-mandatory ">
        <div className=" bg-green-300   h-screen flex justify-center items-center snap-start"></div>
        <AnimatedItem delay={1}>
          <div className=" w-96 h-96 bg-black"></div>
        </AnimatedItem>
        <div className=" bg-red-300   h-screen flex justify-center items-center snap-start"></div>
      </div>
    </div>
  );
};

export default Test;
