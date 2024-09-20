import { motion, useInView } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay: number;
  className: string;
  y: number;
}
const AnimatedItem = ({ children, delay, className, y }: Props) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" }); // Detects when element is in view

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, y }} // Start state when entering view
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y }} // Animate in or revert on scroll out
      exit={{ opacity: 1, y: y * -1 }} // Exit state with delay
      transition={{ delay: delay, duration: 0.8, type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedItem;
