import React from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedItemProps {
  children: React.ReactNode;
  delay: number;
}

const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center snap-start">
      {children}
    </section>
  );
};

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start state when entering view
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate in or revert on scroll out
      exit={{ opacity: 0, y: 300 }} // Exit state with delay
      transition={{ delay: delay, duration: 0.6 }}
      className="mb-4 text-3xl"
    >
      {children}
    </motion.div>
  );
};

const Animation: React.FC = () => {
  return (
    <div className="h-screen  overflow-scroll">
      {/* Section 1 */}
      <Section>
        <div className="text-center">
          <AnimatedItem delay={0.1}>Section 1 - Element 1</AnimatedItem>
          <AnimatedItem delay={0.3}>Section 1 - Element 2</AnimatedItem>
          <AnimatedItem delay={0.5}>Section 1 - Element 3</AnimatedItem>
        </div>
      </Section>
      {/* Section 2 */}
      <Section>
        <div className="text-center">
          <AnimatedItem delay={0.1}>Section 2 - Element 1</AnimatedItem>
          <AnimatedItem delay={0.3}>Section 2 - Element 2</AnimatedItem>
          <AnimatedItem delay={0.5}>Section 2 - Element 3</AnimatedItem>
        </div>
      </Section>
      {/* Section 3 */}
      <Section>
        <div className="text-center">
          <AnimatedItem delay={0.1}>Section 3 - Element 1</AnimatedItem>
          <AnimatedItem delay={0.3}>Section 3 - Element 2</AnimatedItem>
          <AnimatedItem delay={0.5}>Section 3 - Element 3</AnimatedItem>
        </div>
      </Section>
    </div>
  );
};

export default Animation;
